const {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
  updateAvailablity,
} = require("../controllers/vehicleControllers");
const { isAdmin, protect } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/all-vehicle", getAllVehicles);
router.get("/by-id/:id", getVehicleById);

router.post("/create", protect, isAdmin, createVehicle);
router.put("/update/:id", protect, isAdmin, updateVehicle);
router.delete("/delete/:id", protect, isAdmin, deleteVehicle);
router.patch("/update-available/:id", protect, isAdmin, updateAvailablity);

module.exports = router;
