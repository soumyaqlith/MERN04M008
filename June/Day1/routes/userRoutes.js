const express = require("express");
const { createUser } = require("../controllers/userController");

const router = express.Router();

router.post("/create",createUser)
// router.put("/")
// router.delete("/")
// router.get("/")

module.exports = router;
