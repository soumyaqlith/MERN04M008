const express = require("express");
const userRoutes = require("./userRoutes");
const ProductRoutes = require("./productRoutes");

const allRouter = express.Router();

allRouter.use("/user", userRoutes)
allRouter.use("/product", ProductRoutes)

module.exports = allRouter