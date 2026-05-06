const express = require("express");
const dotenv = require("dotenv")
const userRoutes =require("./routes/userRoutes");
const connectDB = require("./config/db");

dotenv.config()

const myServer = express();

myServer.use(express.json())

connectDB()

// myServer.use("/api",(req,res)=>{
//     res.send("hello ")
// })
// myServer.get("/api",(req,res)=>{
//     res.send("hello students !")
// })
// myServer.post("/api",(req,res)=>{
//     res.send("hello students !")
// })


myServer.use("/api",userRoutes)

const port = process.env.PORT;

myServer.listen(port, () => {
    console.log("My server is running !",port)
})