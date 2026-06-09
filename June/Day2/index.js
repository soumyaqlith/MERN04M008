const express=require("express");
const connectDB = require("./config/db");
require("dotenv").config()
const myServer=express();
const userRoutes=require("./routes/userRoutes")

myServer.use(express.json())

connectDB()

myServer.use("/user",userRoutes)

myServer.use("/run",(req,res)=>{
    res.send("welcome")
})
const port=process.env.PORt;
myServer.listen(port,()=>{
    console.log("My server is running on ",port)
})