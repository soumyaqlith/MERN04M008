const express = require("express");
const { createProduct, getProductById, getProductsByUser } = require("../controllers/productController");
const router = express.Router()


router.post("/", createProduct);
router.get("/:productId", getProductById)
router.get("/byUser/:userId", getProductsByUser)

module.exports = router