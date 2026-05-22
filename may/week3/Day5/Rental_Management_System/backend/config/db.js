const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conne=await mongoose.connect(process.env.MONGO_URI);
        console.log("My DB connected");
        console.log(conne.connection.host);
    } catch (error) {
        console.log("failed to connect")
    }
};

module.exports = connectDB;
