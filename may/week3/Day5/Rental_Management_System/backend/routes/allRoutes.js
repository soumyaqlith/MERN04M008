const express = require("express");
const authRoutes = require("./authRoutes");
const vehicleRoutes = require("./vehicleRoutes");
const contactRoutes = require("./contactRoutes");
const bookingRoutes = require("./bookingRoutes");

const allRoutes = express.Router();

allRoutes.use("/auth", authRoutes);
allRoutes.use("/vehicle",vehicleRoutes);
allRoutes.use("/contact",contactRoutes)
allRoutes.use("/booking",bookingRoutes)
module.exports = allRoutes;
