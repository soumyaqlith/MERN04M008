const express = require("express");
const { getUsers, createUser, updateUser, deleteUser, getUserById } = require("../controllers/userController");
const validation = require("../middleware/ValidationMiddleWare");
const authentication = require("../middleware/authMiddleWare");
const router = express.Router();


router.get("/", validation, authentication, getUsers);

router.get("/:id", validation, getUserById)

router.post("/", createUser);

router.put("/:userId", updateUser);

router.delete("/:userId", deleteUser);


module.exports = router