const Vehicle = require("../models/vehicleModel");

exports.createVehicle = async (req, res) => {
  try {
    const {
      name,
      number_plate,
      brand,
      colour,
      category,
      type,
      price_perDay,
      about,
      thumbnail,
    } = req.body;

    if (
      !name ||
      !number_plate ||
      !brand ||
      !category ||
      !type ||
      !price_perDay ||
      !thumbnail
    ) {
      return res.status(400).json({
        success: false,
        message: "Kindly send all required details",
      });
    }

    const vehicle = await Vehicle.create({
      name,
      number_plate,
      brand,
      colour,
      category,
      type,
      price_perDay,
      about,
      thumbnail,
    });

    return res.status(201).json({
      success: true,
      message: "Successfully created",
      vehicle,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();

    if (vehicles.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No vehicles found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched",
      vehicles,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch vehicles",
      error: err.message,
    });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched",
      vehicle,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch vehicle",
      error: err.message,
    });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    const updateVehicle = await Vehicle.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateVehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully updated",
      updateVehicle,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update",
      error: err.message,
    });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteVehicle = await Vehicle.findByIdAndDelete(id);

    if (!deleteVehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete",
      error: err.message,
    });
  }
};

exports.updateAvailablity = async (req, res) => {
  try {
    const { id } = req.params;

    const existingVehicle = await Vehicle.findById(id);

    if (!existingVehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    if (!existingVehicle.isAvailable) {
      return res.status(400).json({
        success: false,
        message: "Already booked",
      });
    }

    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      id,
      { isAvailable: false },
      { new: true },
    );

    return res.status(200).json({
      success: true,
      message: "Availability updated successfully",
      vehicle: updatedVehicle,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update availability",
      error: err.message,
    });
  }
};
