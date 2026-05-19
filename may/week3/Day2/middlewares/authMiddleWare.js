const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        const tokenUser = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        const existUser = await User.findById(tokenUser.user._id);

        if (!existUser) {
            res.status(404).json({ message: "Unauthorized" })
        }
        next()
    } catch (error) {
        res.status(500).json({ message: "failed to check" })
    }
}

module.exports = protect 