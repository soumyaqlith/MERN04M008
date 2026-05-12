const express = require("express");
const dotenv=require("dotenv");
const connectDB = require("./config/db");
const userRoutes=require("./routes/userRoutes")
dotenv.config()

const myServer = express();

connectDB()
myServer.use(express.json())


myServer.use("/user",userRoutes)

myServer.use("/api",(req,res)=>{
    res.send("Hello welome to my own server !")
})

const port = process.env.PORT;

myServer.listen(port, () => {
    console.log("My server is running !",port)
})