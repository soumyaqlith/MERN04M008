const express = require("express");
const { createUser, getUsers, deleteUser, updateUser } = require("../controllers/userController");
const router = express.Router();

router.get("/",getUsers)

router.post("/",createUser)

router.delete("/:id", deleteUser)

router.put("/:id", updateUser)

module.exports = router