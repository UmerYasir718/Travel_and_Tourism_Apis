const CarouselPicture = require("../Models/CarouselPicture");
module.exports.UserCarousel = async (req, res) => {
  try {
    const routes = await CarouselPicture.find();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
