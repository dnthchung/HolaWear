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

// GET all users (for admin/seller)
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// POST create order for user
const createOrder = async (req, res, next) => {
  try {
    const { userId, orderItems, shippingAddress, totalPrice, orderStatus } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newOrder = new Order({
      userId,
      orderItems,
      shippingAddress,
      totalPrice,
      orderStatus,
      isPayment: false,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    next(error);
  }
};

// POST approve order (change status from pending to shipped)
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

    order.orderStatus = "cancelled";
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

// POST user payment (mark order as completed)
const userPayment = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.orderStatus = "completed";
    order.isPayment = true;
    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  getAllUsers,
  approveOrder,
  cancelOrder,
  userPayment,
};
