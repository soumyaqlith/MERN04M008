const express = require("express");
require("dotenv").config()
const allRoutes = require("./routes/allRoutes");
const connectDB = require("./config/db");
const cors = require("cors")

const myServer = express();
myServer.use(express.json())
myServer.use(cors())

connectDB()

myServer.use("/api", allRoutes)

myServer.use("/run", (req, res) => {
    res.send("welcome to server world!")
})
const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("My server is running ...")
})