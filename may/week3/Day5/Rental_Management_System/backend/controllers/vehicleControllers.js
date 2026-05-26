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
  } catch (error) {
    res.status(500).json({ success: false, message: "something gone wrong" });
  }
};
