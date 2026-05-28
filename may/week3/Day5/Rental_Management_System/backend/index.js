const express = require("express");
const connectDB = require("./config/db");
const allRoutes = require("./routes/allRoutes");
const cors = require("cors");
require("dotenv").config();

const myServer = express();

connectDB();
myServer.use(express.json());
myServer.use(
  cors({
    origin: "*",
  }),
);

myServer.use("/api", allRoutes);

myServer.use("/run", (req, res) => {
  res.send("welcome to my server world !");
});
const port = process.env.PORT;

myServer.listen(port, () => {
  console.log("My server is running ...", port);
});
