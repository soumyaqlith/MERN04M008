const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const myServer = express();

connectDB()

myServer.use("/run",(req,res)=>{
    res.send("my server world")
})
const port = process.env.PORT;

myServer.listen(port, () => {
  console.log("My server is running ...",port);
});
