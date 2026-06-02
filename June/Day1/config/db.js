const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
     process.env.MONGO_URL);
    console.log("my db connected");
  } catch (error) {
    console.log("failed connect");
  }
};

module.exports = connectDB;
