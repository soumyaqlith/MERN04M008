const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const user = req.user;

    const product = await Product.create({
      title,
      price,
      description,
      createdBy: user._id,
    });

    return res
      .status(201)
      .json({ success: true, message: "successfully created" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "failed to create product" });
  }
};
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("createdBy", "name email");

    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "successfully fetched", products });
  } catch (error) {
    return res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
exports.getProductById = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
exports.updateProduct = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ success: false, message: "update failed" });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "failed to delete" });
  }
};

exports.getAllProductsByUser = async (req, res) => {
  try {
    const user = req.user;

    const userRelatedProducts = await Product.find({ createdBy: user._id });

    if(!userRelatedProducts){
        return res.status(404).json({success:false,message:"not found"})
    }
    return res.status(200).json({success:true,message:"successfully fetch",userRelatedProducts})
  } catch (error) {
    return res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
