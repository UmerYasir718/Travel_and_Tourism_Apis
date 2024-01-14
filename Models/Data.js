const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
});

module.exports = mongoose.model("Data", DataSchema);
