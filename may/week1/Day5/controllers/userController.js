const User = require("../models/userModel")

const createUser = async (req, res) => {
    try {
        const { fullName, age, email, password } = req.body;

        if (!fullName || !age || !email || !password) {
            res.json({ message: "kindly fill all the filed" })
        }

        const existUser = await User.findOne({ email });

        if (existUser) {
            res.json({ message: "user already present" })
        } else {
            const user = new User(req.body);

            const createdUser = await user.save()

            if (!createUser) {
                res.json({ message: "user is not created" })
            }


            res.json({ message: "successfully user created" })
        }

    } catch (error) {
        console.log("Failed to create")
    }
}

module.exports = { createUser }