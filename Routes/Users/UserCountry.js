// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const Countries = require("../../Models/Countries");
// Define user-related routes
router.get("/home/countries", async (req, res) => {
  try {
    const items = await Countries.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
