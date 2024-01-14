// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const PopularRoutes = require("../../Models/PopularRoutes");
// Define user-related routes
router.get("/home/popularRoutes", async (req, res) => {
  try {
    const routes = await PopularRoutes.find();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
