// routes/userRoutes.js
const express = require("express");
const router = express.Router();
// const PopularRoutes = require("../../Models/PopularRoutes");
// Define user-related routes
router.get("/home/countryRecord", async (req, res) => {
  try {
    const countryRecord = await countriesRecord.find();
    res.json(countryRecord);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
