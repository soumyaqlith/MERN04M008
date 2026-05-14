const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
// const validation = require("./middleware/ValidationMiddleWare");
// const authentication = require("./middleware/authMiddleWare");
dotenv.config()

const myServer = express();
myServer.use(express.json())

connectDB()

// myServer.use(validation)
// myServer.use(authentication)
myServer.use("/user", userRoutes);



myServer.use("/api", (req, res) => {
    console.log("this is the api request")
    res.send("Welcome to my code world")
});

const port = process.env.PORT;
myServer.listen(port, () => {
    console.log("My server is running...")
});