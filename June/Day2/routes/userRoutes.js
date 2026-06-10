const express = require("express");
const {
  createUser,
  updateUser,
  getAllUser,
  getUserById,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/create", createUser);
router.put("/update/:id", updateUser);
router.get("/all-users", getAllUser);
router.get("/byId/:id", getUserById);
router.delete("/delete/:id", deleteUser);

module.exports = router;
