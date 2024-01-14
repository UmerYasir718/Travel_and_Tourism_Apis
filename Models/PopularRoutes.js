const mongoose = require("mongoose");

const PopularRoutes = new mongoose.Schema({
  image: String,
  srcPlace: String,
  desPlace: String,
  price: Number,
});

module.exports = mongoose.model("PopularRoutes", PopularRoutes);
