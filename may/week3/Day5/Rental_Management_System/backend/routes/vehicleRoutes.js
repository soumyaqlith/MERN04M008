const { createVehicle } = require("../controllers/vehicleControllers");
const { isAdmin, protect } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/create", protect, isAdmin, createVehicle);

module.exports = router;
