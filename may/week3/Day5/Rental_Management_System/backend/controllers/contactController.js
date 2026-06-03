const Contact = require("../models/contactModel");

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      res.status(200).json({
        success: false,
        message: "Daya kari field data send karantu!",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    if (!contact) {
      res.status(200).json({ success: false, message: "failed to create" });
    }
    res.status(201).json({ success: true, message: "successfully created" });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to create" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteContact = await Contact.findByIdAndDelete(id);

    if (!deleteContact) {
      res.status(200).json({ success: false, message: "failed to delete" });
    }
    res.status(200).json({ success: true, message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to delete" });
  }
};
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    if (!contacts) {
      res.status(200).json({ success: false, message: "contact not found" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "successfully fetched", contacts });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
