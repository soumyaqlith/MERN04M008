const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
