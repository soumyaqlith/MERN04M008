const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    number_plate: {
      type: String,
    },
    brand: {
      type: String,
    },
    colour: {
      type: String,
    },
    category: {
      type: String,
      enum: ["car", "bike", "scooty", "ola"],
    },
    type: {
      type: String,
      enum: ["disel", "petrol", "ev", "cng"],
    },

    price_perDay: {
      type: Number,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
    about: {
      type: String,
      trim: true,
    },
    thumbnail:{
        type:String
    }
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
