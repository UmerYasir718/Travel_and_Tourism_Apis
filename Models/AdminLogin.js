const mongoose = require("mongoose");
const AdminLoginSchema = new mongoose.Schema({
  adminName: String,
  adminEmail: String,
  adminPassword: String,
});

module.exports = mongoose.model("AdminLogin", AdminLoginSchema);
