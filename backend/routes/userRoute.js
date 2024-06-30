const bodyParser = require("body-parser");
const express = require("express");

const { UserController } = require("../controllers/index.js");

const userRouter = express.Router();
userRouter.use(bodyParser.json());

//create router
userRouter.post("/create", UserController.create);

userRouter.put("/update-general-user/:id", UserController.updateGeneralUserById);
userRouter.post("/add-address/:id", UserController.addShippingAddress);
userRouter.delete("/delete-address/:id", UserController.deleteShippingAddress);

userRouter.post("/change-password/:id", UserController.changePassword);
module.exports = userRouter;
