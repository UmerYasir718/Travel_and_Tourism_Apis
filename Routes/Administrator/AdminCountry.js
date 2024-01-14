// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const Countries = require("../../Models/Countries");
router.post("/home/countries", async (req, res) => {
  try {
    const { countryName, countryPrice } = req.body;

    // Simple validation, ensure all fields are provided
    if (!countryName || !countryPrice) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    let nweCountry = await Countries.create({
      countryName: countryName,
      countryPrice: countryPrice,
    });
    res.send(nweCountry);
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put("/home/countries/:id", async (req, res) => {
  const { countryName, countryPrice } = req.body;

  const updatedCountry = req.params.id;
  console.log(updatedCountry, countryName, countryPrice);
  try {
    await Countries.findByIdAndUpdate(
      updatedCountry,
      { countryName, countryPrice },
      { new: true }
    );

    if (!updatedCountry) {
      return res.status(404).json({ error: "Country not found" });
    }

    res.json({ message: "Country updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete("/home/countries/:id", async (req, res) => {
  const countryId = req.params.id;

  try {
    await Countries.findByIdAndDelete(countryId);
    res.json({ message: "Country deleted successfully" });
  } catch (error) {
    res.json({ error: "Error deleting item" });
  }
});

module.exports = router;
