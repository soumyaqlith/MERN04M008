const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
    res.send("hii get request called")
})

router.post("/create", (req, res) => {
    console.log(req.body);
    res.send("hii post request called !")
})
router.put("/update/:id", (req, res) => {
    res.send("hii put request called !")
})
router.delete("/delt/:id", (req, res) => {
    res.send("hii dele request called !")
})

module.exports = router