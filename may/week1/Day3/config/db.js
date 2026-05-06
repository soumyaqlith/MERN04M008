const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log("My db Connected !")
    } catch (error) {
        console.log("Failed to connect")
    }
}

module.exports = connectDB