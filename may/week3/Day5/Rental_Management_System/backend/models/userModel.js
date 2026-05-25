const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
    },
    profile_image: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
