const express = require("express");
const { login, getUser } = require("../controller/user.controller");
const Authenticated = require("../middleware/Authenticate");

const userRouter = express.Router();

userRouter.route("/login").post(login);
userRouter.route("/me").get(Authenticated, getUser);

module.exports = userRouter;
