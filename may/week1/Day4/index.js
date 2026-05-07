const express= require("express");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
dotenv.config()

const myServer=express();

connectDB()

myServer.use(express.json())

const userRoutes =require("./routes/userRoutes")

myServer.use("/user",userRoutes)

myServer.use("/run",(req,res)=>{
    res.send("Yes your backend is running !")
})

const port=process.env.PORT;

myServer.listen(port,()=>{
    console.log("My server is running ....")
})