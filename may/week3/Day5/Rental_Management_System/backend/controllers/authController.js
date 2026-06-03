const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, age, phone, email, password } = req.body;

    if (!name || !age || !phone || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Fill all fields",
      });
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      age,
      phone,
      email,
      password: hash,
    });

    return res.status(201).json({
      success: true,
      message: "Successfully created",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Fill all fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "Invalid email",
      });
    }

    const result = await bcrypt.compare(password, existingUser.password);

    if (!result) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      },
    );

    const user = existingUser.toObject();
    delete user.password;

    return res.status(200).json({
      success: true,
      message: "Successfully login",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.allUsers = async (req, res) => {
  try {
    const users = await User.find({
      role: "user",
    }).select("-password");

    return res.status(200).json({
      success: true,
      message: "Successfully fetched",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
