const Product = require("../models/productModel");
const User = require("../models/userModel");

exports.createProduct = async (req, res) => {
    try {

        const { title, description, price, createdBy } = req.body;

        if (!title || !description || !price) {
            res.status(500).json({ message: "Kindly fill the field" })
        }

        const product = new Product({
            title,
            description,
            price,
            createdBy
        });
        await product.save()

        res.send("successfully created")
    } catch (error) {
        res.status(500).json({ message: "Failed", error: error.message })
    }
}

exports.getProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        if (!productId) {
            res.status(500).json({ message: "product id is not there" });
        }

        // const product = await Product.findById(productId).populate("createdBy", "fullName email");
        const product = await Product.findById(productId).populate({
            path: "createdBy",
            select: "fullName email age"
        });

        if (!product) {
            res.status(404).json({ message: "not found" })
        }
        res.status(200).json({ message: "successfully fetched", product })

    } catch (error) {
        res.status(500).json({ message: "failed to fetch" });
    }
}

exports.getProductsByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const existingUser = await User.findById(userId);

        if (!existingUser) {
            res.status(404).json({ message: "user is not found" })
        }

        const products = await Product.find({ createdBy: userId }).select("title description price")
        if (!products) {
            res.status(404).json({ message: "products not found" })
        }
        res.status(200).json({ message: "Successfully fetched", products })
    } catch (error) {
        res.status(500).json({ message: "failed to fetch" })
    }
}

