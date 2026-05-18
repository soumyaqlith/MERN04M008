const express = require("express");
const dotenv = require("dotenv");
dotenv.config()

const allRoutes = require("./routes/allRoutes");
const connectDB = require("./config/db");

const myServer = express();

myServer.use(express.json())
connectDB()


myServer.use("/api", allRoutes)

myServer.use("/run", (req, res) => {
    res.send("welcome to my server")
})

const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("My server is running on port ", port)
})