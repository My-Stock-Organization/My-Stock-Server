const express = require("express");
const userController = require("../controllers/user.controller");
const validator = require("../utils/validation/user.validator");
const userAuth = require("../middlewares/UserAuth.middle");
const isAdmin = require("../middlewares/adminAuth.middle");
const multerConfig = require("../utils/multerConfig");

const userRouter = express.Router();

userRouter.route("/signup").post(validator, userController.signUP);
userRouter.route("/login").post(userController.login);

userRouter.route("/").get(userController.findAll);
userRouter.route("/:id").get(userController.findone);

userRouter.route("/delete/:id").delete(userAuth, userController.deleteOne);

userRouter
  .route("/update/:id")
  .patch(userAuth, validator, userController.updateOne);
userRouter.route("/images/:id").patch(multerConfig, userController.uploadImage);

userRouter.route("/admin/login").post(userController.Adminlogin);

// userRouter.route("/getme").get(userController.getloggedUserData,userController.findone);

module.exports = userRouter;
