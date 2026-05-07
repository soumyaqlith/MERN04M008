const mongoose=require("mongoose")

const connectDB = async () => {
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log("My DB connected")
    } catch (error) {
        console.log("Failed to connect")
    }
}

module.exports = connectDB