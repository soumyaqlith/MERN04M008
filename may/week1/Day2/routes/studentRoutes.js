const express = require("express");

const router = express.Router();


router.get("/",(req,res)=>{
    res.send("get method call")
})


module.exports = router