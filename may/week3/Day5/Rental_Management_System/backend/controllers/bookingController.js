const Booking = require("../models/bookingModel");
const Vehicle = require("../models/vehicleModel");

exports.createBooking = async (req, res) => {
  try {
    const user = req.user;
    const { vehicle, startDate, endDate, pickupLocation, dropLocation } =
      req.body;

    if (
      !vehicle ||
      !startDate ||
      !endDate ||
      !pickupLocation ||
      !dropLocation
    ) {
      return res
        .status(400)
        .json({ success: false, message: "kindly fill the fields" });
    }

    const existingVehicle = await Vehicle.findById(vehicle);

    if (!existingVehicle) {
      return res
        .status(404)
        .json({ success: false, message: "Vehicle not found" });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    const totalAmount = totalDays * existingVehicle.price_perDay;

    const createdBooking = await Booking.create({
      user: user._id,
      vehicle,
      startDate,
      endDate,
      totalDays,
      pickupLocation,
      dropLocation,
      totalAmount,
    });

    return res
      .status(201)
      .json({ success: true, message: "successfully created" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "failed to booking", success: false });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const loginUser = req.user;

    const myBookings = await Booking.find({ user: loginUser._id });

    if (!myBookings) {
      return res
        .status(404)
        .json({ success: false, message: "user have no booking" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Successfully fetched", myBookings });
  } catch (error) {
    return res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const allBookings = await Booking.find();

    if (!allBookings) {
      return res
        .status(404)
        .json({ success: false, message: "booking not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "successfully fetched", allBookings });
  } catch (error) {
    return res.status(500).json({ sucess: false, message: "failed to fetch" });
  }
};
