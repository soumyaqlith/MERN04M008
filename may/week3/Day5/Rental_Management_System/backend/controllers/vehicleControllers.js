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
      res
        .status(400)
        .json({ success: false, message: "kindly send the detail" });
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

    if (!vehicle) {
      res.status(400).json({ success: false, message: "failed to create" });
    }
    res
      .status(201)
      .json({ success: true, message: "successfully created", vehicle });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something gone wrong",
      error: err.message,
    });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    if (!vehicles || vehicles.length <= 0) {
      res.status(404).json({ success: false, message: "vehicle not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "successfully fetched", vehicles });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to fetch all vehicles",
      error: err.message,
    });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
      res.status(404).json({ success: false, message: "vehicle is not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "successfully fetched", vehicle });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed to fetch", error: err.message });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateVehicle = await Vehicle.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updateVehicle) {
      res
        .status(400)
        .json({ success: false, message: "some error in updating" });
    }

    res
      .status(200)
      .json({ success: true, message: "successfully updated", updateVehicle });
  } catch (err) {
    res.status(500).json({
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
      res.status(400).json({
        success: false,
        message: "some error when delete the vehicle",
      });
    }
    res.status(200).json({ success: true, message: "successfully deleted" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
      error: err.message,
    });
  }
};

exports.updateAvailablity = async (req, res) => {
  try {
    const { id } = req.params;

    const existingVehicle = await Vehicle.findById(id);

    if (existingVehicle.isAvailable === false) {
      res.status(400).json({ success: false, message: "already booked" });
    } else {
      await Vehicle.findByIdAndUpdate(
        id,
        { isAvailable: false },
        { new: true },
      );

      res.status(200).json({success:true,message:"successfully availablity updated"})
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update availiablity",
      error: err.message,
    });
  }
};
