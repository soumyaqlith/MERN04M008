const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "kindly send the token" });
    }
    const { userId } = await jwt.verify(token, process.env.JWT_SECRET);

    const existingUser = await User.findById(userId).select("-password");

    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not exist" });
    }

    req.user=existingUser;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "authentication failed" });
  }
};

module.exports = protect;
