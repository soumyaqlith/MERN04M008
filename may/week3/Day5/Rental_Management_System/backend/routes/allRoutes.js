const express = require("express");
const authRoutes = require("./authRoutes");
const allRoutes = express.Router();

allRoutes.use("/auth", authRoutes);
module.exports = allRoutes;
