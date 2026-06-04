const express = require("express");
const { protect, isAdmin } = require("../middlewares/authMiddleware");
const {
  createBooking,
  getMyBookings,
  getAllBookings,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/my-booking", protect, getMyBookings);
router.get("/all-booking", protect, isAdmin, getAllBookings);

module.exports = router;
