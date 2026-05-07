const User = require("../models/userModel")

const createUser = async (req, res) => {
    try {

        const user = new User(req.body)
        await user.save()
        res.send("post request called")
    } catch (error) {

    }
}
const getUsers = async (req, res) => {
    try {
        const users=await User.find();

        res.json({message:"success",users})
    } catch (error) {

    }
}
const updateUser = async (req, res) => {
    try {
        res.send("update request called")
    } catch (error) {

    }
}
const deleteUser = async (req, res) => {
    try {
        res.send("delete request called")
    } catch (error) {

    }
}

module.exports = { createUser, getUsers, updateUser, deleteUser }