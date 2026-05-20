
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
    try {
        // const users = await User.find({}, { password: 0 });
        const users = await User.find().select("-password");

        if (!users) {
            res.status(404).json({ message: "users not available" })
        }

        // res.send({users,message:"success"})
        res.status(200).json({ message: "succcess fetched", users })
    } catch (error) {
        res.status(500).json({ message: "failed", error: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        // bring the data from user
        // get the data from request object
        // validation on filed
        // validation on existing 
        // create the user
        // send the response

        const { fullName, age, email, password } = req.body;

        if (!fullName || !age || !email || !password) {
            res.send("kindly fill the field")
        }

        const existUser = await User.findOne({ email });
        if (existUser) {
            res.status(500).json({ message: "user already exist" })
        } else {

            bcrypt.hash(password, 10, async function (err, hash) {
                if (err) {
                    res.status(500).json({ message: "failed to convert in hashpassword" });
                }
                const user = new User({
                    fullName,
                    age,
                    email,
                    password: hash
                })
                await user.save()
                res.status(200).json({ message: "successfully creates" })
            });
        }
    } catch (error) {
        console.log(error.message)
        res.send("failed to create")
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(200).json({ message: "fill the field" })
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            res.status(200).json({ message: "Invalid email" });
        }

        bcrypt.compare(password, existingUser.password, async function (err, result) {
            if (!result) {
                res.status(200).json({ message: "Invalid Password" })
            } else {

                const token = await jwt.sign({ user: existingUser }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.EXPIRESIN });

                res.status(200).json({ message: "Login successfull", token })
            }
        });

    } catch (error) {
        res.status(500).json({ message: "failed to login" })
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = req.body

        const existingUser = await User.findById(userId).select("-password");

        if (!existingUser) {
            res.status(404).json({ message: "user not found" })
        }

        const updateUser = await User.findByIdAndUpdate(userId, user, { new: true });

        if (!updateUser) {
            res.status(500).json({ message: "failed to update the user" })
        }
        res.status(200).json({ message: "successfully updated", updateUser })
    } catch (error) {

    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const existingUser = await User.findById(userId).select("-password");

        if (!existingUser) {
            res.status(404).json({ message: "user not found" })
        }

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deleteUser) {
            res.status(500).json({ message: "user is not deleted" })
        }

        res.status(200).json({ message: "successfully deleted" })

    } catch (error) {
        res.status(500).json({ message: "failed to delete" })
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id).select("-password");

        if (!user) {
            res.status(404).json({ message: "user is not found" })
        }
        res.status(200).json({ message: "successfully fetched", user })
    } catch (error) {
        res.status(500).json({ message: "failed to fetch user" })
    }
}

module.exports = { getUsers, createUser, updateUser, deleteUser, getUserById, login }