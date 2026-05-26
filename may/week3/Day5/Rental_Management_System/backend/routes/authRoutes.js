const express = require("express");
const { register, login, allUsers } = require("../controllers/authController");
const { protect, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/allusers", protect, isAdmin, allUsers);
module.exports = router;
