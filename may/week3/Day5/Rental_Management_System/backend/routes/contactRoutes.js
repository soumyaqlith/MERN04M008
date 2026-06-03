const express = require("express");
const {
  createContact,
  deleteContact,
  getContacts
} = require("../controllers/contactController");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", createContact);
router.delete("/:id", protect, isAdmin, deleteContact);
router.get("/", protect, isAdmin, getContacts);

module.exports = router;
