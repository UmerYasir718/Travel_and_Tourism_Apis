// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const PopularRoutes = require("../../Models/PopularRoutes");
const cloudinary = require("../../Cloudinary/Cloudinary");
// Define user-related routes
router.post("/home/popularRoutes", async (req, res) => {
  try {
    const { srcPlace, desPlace, routesPrice } = req.body;
    console.log(srcPlace, desPlace, routesPrice);
    const uploadedFile = req.files.routesImg;

    if (!uploadedFile) {
      return res.status(400).send("No file uploaded.");
    }
    console.log(uploadedFile);
    const result = await cloudinary.uploader.upload(uploadedFile.tempFilePath);
    // Simple validation, ensure all fields are provided
    if (!srcPlace || !desPlace || !routesPrice) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    let Route = await PopularRoutes.create({
      image: result.url,
      srcPlace: srcPlace,
      desPlace: desPlace,
      price: routesPrice,
    });
    res.send(Route);
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/home/popularRoutes/:id", async (req, res) => {
  const routesId = req.params.id;

  try {
    await PopularRoutes.findByIdAndDelete(routesId);
    res.json({ message: "Route deleted successfully" });
  } catch (error) {
    res.json({ error: "Error deleting item" });
  }
});

module.exports = router;
