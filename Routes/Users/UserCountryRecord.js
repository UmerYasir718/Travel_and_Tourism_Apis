// routes/userRoutes.js
const express = require("express");
const router = express.Router();
// const PopularRoutes = require("../../Models/PopularRoutes");
// Define user-related routes
const CountriesRecord = require("../../Models/CountryRecord");
router.get("/find/:countryName", async (req, res) => {
  try {
    const { countryName } = req.params;
    console.log(countryName);

    // Use the countryName parameter to filter data in the MongoDB collection
    const data = await CountriesRecord.findOne({ country: countryName });
    if (!data) {
      res.status(404).json({ error: "Country not found" });
      return;
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
