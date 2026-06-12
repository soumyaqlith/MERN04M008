const express = require("express");
const protect = require("../middlewares/authMiddleware");
const {
  createProduct,
  getAllProducts,
  getProductById,
  getAllProductsByUser,
} = require("../controllers/productController");
const { getUserById } = require("../controllers/userController");

const router = express.Router();

router.post("/create", protect, createProduct);
router.get("/all-products", getAllProducts);
router.get("/byId/:id", getProductById);

router.get("/all-product-Byuser", protect, getAllProductsByUser);

module.exports = router;
