const mongoose = require("mongoose");

const LoginDataSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  userPassword: String,
});

module.exports = mongoose.model("UserData", LoginDataSchema);
