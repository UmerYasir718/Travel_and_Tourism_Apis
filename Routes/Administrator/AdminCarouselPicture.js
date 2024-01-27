const express = require("express");
const cors = require("cors");
const router = express.Router();
const CarouselPicture = require("../../Models/CarouselPicture");
const cloudinary = require("../../Cloudinary/Cloudinary");
router.post("/carouselPic", async (req, res) => {
  try {
    const { page } = req.body;
    console.log(page);
    const uploadedFile = req.files.Image;

    if (!uploadedFile) {
      return res.status(400).send("No file uploaded.");
    }
    console.log(uploadedFile);
    const result = await cloudinary.uploader.upload(uploadedFile.tempFilePath);
    // Simple validation, ensure all fields are provided
    if (!page) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    let picture = await CarouselPicture.create({
      image: result.url,
      page: page,
    });
    res.send(picture);
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete("/carouselPic/:id", async (req, res) => {
  const picture = req.params.id;
  console.log(picture);

  try {
    await CarouselPicture.findByIdAndDelete(picture);
    res.json({ message: "Picture deleted successfully" });
  } catch (error) {
    res.json({ error: "Error deleting item" });
  }
});
module.exports = router;
