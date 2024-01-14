const mongoose = require("mongoose");

const SliderImg = new mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model("SliderImg", SliderImg);
