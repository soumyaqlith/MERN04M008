const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
