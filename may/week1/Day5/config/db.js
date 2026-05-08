const mongoose=require("mongoose")

const connectDB=async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("My DB connected")
    } catch (error) {
        console.log("failed to connect")
    }
}

module.exports=connectDB