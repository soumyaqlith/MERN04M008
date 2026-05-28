const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, age, phone, email, password } = req.body;

    if (!name || !age || !phone || !email || !password) {
      res.status(200).json({ success: false, message: "fill the field" });
    }
    const existUser = await User.findOne({ email }).select("-password");

    if (existUser) {
      res.status(200).json({ success: false, message: "user already exist" });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
          res
            .status(200)
            .json({ success: false, message: "failed to convert into hash" });
        }

        const user = new User({
          name,
          age,
          phone,
          email,
          password: hash,
        });

        await user.save();

        res
          .status(201)
          .json({ success: true, message: "successfully created" });
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to register" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(200).json({ success: false, message: "fill the field" });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(200).json({ success: false, message: "Invalid email" });
    } else {
      bcrypt.compare(password, existingUser.password, function (err, result) {
        if (result) {
          const token = jwt.sign(
            {
              userId: existingUser._id,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" },
          );

          res.status(200).json({
            success: true,
            message: "successfully login",
            token,
            user:existingUser
          });
        } else {
          res.status(200).json({ success: false, message: "Invalid password" });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};

exports.allUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    if (!users) {
      res.status(404).json({ success: false, message: "user not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "successfully fetched", users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch" });
  }
};
