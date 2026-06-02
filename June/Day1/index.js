const express = require("express");
const dotenv = require("dotenv");
const userRoutes =require("./routes/userRoutes");
const connectDB = require("./config/db");
dotenv.config();

const myServer = express();

myServer.use(express.json())
connectDB()

myServer.use('/user',userRoutes)

myServer.use("/run",(req,res)=>{
    res.send("welcome")
})

const port = process.env.PORT;
myServer.listen(port, () => {
  console.log("My server is running", port);
});
