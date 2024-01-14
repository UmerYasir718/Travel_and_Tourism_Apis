const mongoose = require("mongoose");

const Countries = new mongoose.Schema(
  {
    countryName: String,
    countryPrice: Number,
  },
  { collection: "countries" }
);

module.exports = mongoose.model("Countries", Countries);
