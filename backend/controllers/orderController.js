const createHttpError = require("http-errors");
const db = require("../models");
const Cart = db.cart;
const Product = db.product;
const User = db.user;
const Order = db.order;

// GET all orders by user ID
const getOrdersByUserId = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const orders = await Order.find({ userId }).populate("orderItems.productId");

    if (!orders.length) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

// GET all order of users in system (for admin/seller)
const getAllOrders = async (req, res, next) => {
  try {
    //get all order in db - nếu có .populate("orderItems.productId") thì sẽ lấy ra thông tin của product ứng với productId
    const orders = await Order.find();

    // console.log(orders);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

// POST create order for user
const createOrder = async (req, res, next) => {
  try {
    const { userId, orderItems, shippingAddress, totalPrice, orderStatus } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Get product IDs from order items
    const productId = orderItems.map((item) => item.productId);

    // Find products by IDs
    const products = await Product.find({ _id: { $in: productId } });

    // Check stock availability for each product item
    for (const item of orderItems) {
      const product = products.find((p) => p._id.toString() === item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product not found for item ${item.productTitle}` });
      }

      const stockDetail = product.stockDetails.find((stock) => stock.colorCode === item.color);
      if (!stockDetail) {
        return res.status(400).json({ message: `Color ${item.color} not available for product ${item.productTitle}` });
      }

      const sizeDetail = stockDetail.details.find((detail) => detail.size === item.size);
      if (!sizeDetail || sizeDetail.quantity < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for size ${item.size} of product ${item.productTitle}, just have ${sizeDetail ? sizeDetail.quantity : 0} in stock.` });
      }
    }

    console.log("Order is valid");

    // Create a new order
    const newOrder = new Order({
      userId,
      orderItems,
      shippingAddress,
      totalPrice,
      orderStatus: orderStatus || "pending",
      isPayment: false,
    });
    const savedOrder = await newOrder.save();

    // Update stock details
    for (const item of orderItems) {
      const product = await Product.findById(item.productId);

      const stockDetail = product.stockDetails.find((stock) => stock.colorCode === item.color);
      const sizeDetail = stockDetail.details.find((detail) => detail.size === item.size);

      sizeDetail.quantity -= item.quantity;

      await product.save();
    }

    res.status(201).json(savedOrder);
  } catch (error) {
    next(error);
  }
};

// POST approve order (change status from pending to shipped) - for admin/seller
const approveOrder = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.orderStatus = "shipped";
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

// POST cancel order (user cancels their order)
const cancelOrder = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Reverse the stock quantity adjustments
    for (const item of order.orderItems) {
      const product = await Product.findById(item.productId);
      const stockDetail = product.stockDetails.find((stock) => stock.colorCode === item.color);
      const sizeDetail = stockDetail.details.find((detail) => detail.size === item.size);
      sizeDetail.quantity += item.quantity;

      console.log("Reversed stock quantity for product", product.title, "size", item.size, "color", item.color, "quantity", item.quantity);
      // await product.save();
    }

    // order.orderStatus = "cancelled";
    // const updatedOrder = await order.save();
    // res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

// POST user payment (mark order as completed) - Confirm Received
const completedOrder = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.orderStatus = "completed";
    order.isPayment = true;
    const updatedOrder = await order.save();
    res.status(201).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

//PUT update order status and isPayment by order id
const statusOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (status === "shipping") {
      order.orderStatus = "shipping";
      const updatedOrder = await order.save();
      return res.status(200).json(updatedOrder);
    }

    if (status === "completed") {
      order.orderStatus = "completed";
      order.isPayment = true;
      const updatedOrder = await order.save();
      return res.status(200).json(updatedOrder);
    }

    if (status === "cancelled") {
      order.orderStatus = "cancelled";

      // Update stock details when an order is cancelled
      for (const item of order.orderItems) {
        const product = await Product.findById(item.productId);

        const stockDetail = product.stockDetails.find((stock) => stock.colorCode === item.color);
        const sizeDetail = stockDetail.details.find((detail) => detail.size === item.size);

        sizeDetail.quantity += item.quantity;

        // Add back the size if it was removed (if applicable)
        if (!stockDetail.details.find((detail) => detail.size === item.size)) {
          stockDetail.details.push({ size: item.size, quantity: item.quantity });
        }

        // Add back the color if it was removed (if applicable)
        if (!product.stockDetails.find((stock) => stock.colorCode === item.color)) {
          product.stockDetails.push({ colorCode: item.color, details: [{ size: item.size, quantity: item.quantity }] });
        }

        await product.save();
      }

      const updatedOrder = await order.save();
      return res.status(200).json(updatedOrder);
    }
  } catch (error) {
    next(error);
  }
};

// get all orders to find Top Products by Units Sold
const getTopProducts = async (req, res, next) => {
  try {
    const orders = await Order.find({ orderStatus: "completed" }).populate("orderItems.productId");

    const productSales = {};

    orders.forEach((order) => {
      order.orderItems.forEach((item) => {
        const productId = item.productId._id.toString();
        const key = `${productId}_${item.color}_${item.size}`;

        if (!productSales[key]) {
          productSales[key] = {
            productId: productId,
            productTitle: item.productTitle,
            productThumbnail: item.thumbnail,
            productSize: item.size,
            productColor: item.color,
            quantity: 0,
          };
        }

        productSales[key].quantity += item.quantity;
      });
    });

    const sortedProducts = Object.values(productSales).sort((a, b) => b.quantity - a.quantity);
    const topProducts = sortedProducts.slice(0, 10);

    res.status(200).json(topProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  getAllOrders,
  approveOrder,
  cancelOrder,
  completedOrder,
  statusOrder,
  getTopProducts,
};

module.exports = {
  getTopProducts,
  createOrder,
  getOrdersByUserId,
  getAllOrders,
  approveOrder,
  cancelOrder,
  completedOrder,
  statusOrder,
};
