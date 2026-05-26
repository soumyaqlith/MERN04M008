const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(400).json({ success: false, message: "token mila nenhi" });
    }

    const { userId } = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!userId) {
      res.status(500).json({ success: false, message: "failed to verify" });
    }

    const existingUser = await User.findById(userId);

    if (!existingUser) {
      res.status(404).json({ success: false, message: "user not found" });
    }

    req.user = existingUser;

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed in protect",
      error: error.message,
    });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "admin") {
      res
        .status(400)
        .json({ success: false, message: "login user is not admin" });
    }
    next();
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed", error: error.message });
  }
};

module.exports = { protect, isAdmin };
