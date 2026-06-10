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

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, email } = req.body;

    // const existingUser = await User.findById(id);
    // if (!existingUser) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "user not exist",
    //   });
    // }

    // User.updateOne()

    const updatedUser = await User.findByIdAndUpdate(id, { name, age, email });

    if (!updatedUser) {
      return res.status(400).json({
        success: false,
        message: "failed to update",
      });
    }
    return res.status(200).json({
      success: true,
      message: "successfully updated",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to update ",
      error: error.message,
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find().select("name age email");

    if (!users) {
      return res.status(404).json({
        success: false,
        message: "users not exist",
      });
    }
    return res.status(200).json({
      success: true,
      message: "successfully fetch",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to fetch",
      error: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "user not exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "successfully fetched",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to fetch",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "user not exist",
      });
    }
    return res.status(200).json({
      success: true,
      message: "successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to delete",
      error: error.message,
    });
  }
};
