const Product = require("../models/productModel");

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

