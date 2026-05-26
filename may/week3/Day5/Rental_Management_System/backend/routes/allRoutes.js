const express = require("express");
const authRoutes = require("./authRoutes");
const vehicleRoutes = require("./vehicleRoutes");

const allRoutes = express.Router();

allRoutes.use("/auth", authRoutes);
allRoutes.use("/vehicle",vehicleRoutes)
module.exports = allRoutes;
