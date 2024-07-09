const express = require("express");
const orderRouter = express.Router();
const { OrderController } = require("../controllers/index.js");

// Create order
orderRouter.post("/create-order", OrderController.createOrder);

// Get orders by user ID
orderRouter.get("/user-orders/:id", OrderController.getOrdersByUserId);

// Get all order of users in system (for admin/seller)
orderRouter.get("/all-orders", OrderController.getAllOrders);

// Approve order (change status from pending to shipped)
orderRouter.post("/approve-order", OrderController.approveOrder);

// Cancel order (user cancels their order)
orderRouter.post("/cancel-order", OrderController.cancelOrder);

// User payment (mark order as completed)
orderRouter.post("/user-payment", OrderController.userPayment);

module.exports = orderRouter;
