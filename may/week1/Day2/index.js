const express = require("express");

const userRoutes =require("./routes/userRoutes")
const studentRoutes =require("./routes/studentRoutes")
const dotenv=require("dotenv")

const myServer = express();

dotenv.config();

myServer.use(express.json())


// myServer.use("/api", (req, res) => {
//     res.send("Hii Welcome !");
// })

// myServer.post("/create", (req, res) => {
//     res.send("post request called !")
// })

// myServer.put("/update", (req, res) => {
//     res.send("put request called !")
// })


myServer.use("/api/user",userRoutes);
myServer.use("/api/student",studentRoutes);


const port =process.env.PORT; 

myServer.listen(port, () => {
    console.log("My server is running !",port)
})