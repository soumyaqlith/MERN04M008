const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const allRouter = require("./routes/allRoutes");
dotenv.config()

const myServer = express();

myServer.use(express.json());
connectDB()

myServer.use("/api", allRouter)

myServer.use("/run", (req, res) => {
    res.send("Welcome to my App")
})


const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("My server is running !")
})