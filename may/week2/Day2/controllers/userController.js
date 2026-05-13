
const User = require("../models/userModel");

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
            res.send("user already exist")
        } else {
            const user = new User({ fullName, age, email, password })
            await user.save()
            res.send("successfully creates")
        }
    } catch (error) {
        console.log(error.message)
        res.send("failed to create")
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

        const existingUser=await User.findById(userId).select("-password");

        if(!existingUser){
            res.status(404).json({message:"user not found"})
        }

        const deletedUser= await User.findByIdAndDelete(userId);

        if(!deleteUser){
            res.status(500).json({message:"user is not deleted"})
        }

        res.status(200).json({message:"successfully deleted"})

    } catch (error) {
        res.status(500).json({ message: "failed to delete" })
    }
}

module.exports = { getUsers, createUser, updateUser, deleteUser }