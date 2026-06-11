const express = require("express");
const {
  createUser,
  updateUser,
  getAllUser,
  getUserById,
  deleteUser,
  loginUser,
} = require("../controllers/userController");
const protect = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.put("/update/:id", updateUser);
router.get("/all-users", protect, getAllUser);
router.get("/byId/:id", getUserById);
router.delete("/delete/:id", deleteUser);

module.exports = router;
