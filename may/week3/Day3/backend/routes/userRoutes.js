const express = require("express");
const { getUsers, createUser, updateUser, deleteUser, getUserById, login } = require("../controllers/userController");
const protect = require("../middlewares/authMiddleWare");
const router = express.Router();


router.post("/register", createUser);
router.post("/login", login)

router.get("/", protect, getUsers);
router.get("/:id", getUserById);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);


module.exports = router