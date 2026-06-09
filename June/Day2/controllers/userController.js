const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    // fetch the data from user (req.body)
    // validation the field
    // validate the existing object
    // -> success -create the user
    //  ->false - no creation
    // send the proper response

    const { name, age, email, password } = req.body;
    if (!name || !age || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "kindly fill the field",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exist",
      });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      const createdUser = await User.create({
        name,
        age,
        email,
        password: hash,
      });

      return res.status(201).json({
        success: true,
        message: "successfully user created",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to create",
      error: error.message,
    });
  }
};
