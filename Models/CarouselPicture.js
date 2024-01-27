const mongoose = require("mongoose");

const CarouselPicture = new mongoose.Schema({
  image: String,
  page: String,
});

module.exports = mongoose.model("CarouselPicture", CarouselPicture);
