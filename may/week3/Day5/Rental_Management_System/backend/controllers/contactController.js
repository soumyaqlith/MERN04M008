const Contact = require("../models/contactModel");

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
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
      return res.status(400).json({
        success: false,
        message: "Failed to create",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Successfully created",
      contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteContact = await Contact.findByIdAndDelete(id);

    if (!deleteContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Successfully fetched",
      contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
