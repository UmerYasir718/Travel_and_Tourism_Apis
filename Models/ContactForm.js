const mongoose = require("mongoose");

const ContactForm = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  subject: String,
  issue: String,
});

module.exports = mongoose.model("ContactForm", ContactForm);
