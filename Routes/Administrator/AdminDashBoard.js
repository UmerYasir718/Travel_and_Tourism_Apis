const express = require("express");
const router = express.Router();
const UserData = require("../../Models/UserData");
const Countries = require("../../Models/Countries");
const PopularRoutes = require("../../Models/PopularRoutes");
router.get("/count", async (req, res) => {
  try {
    const totalUsers = await UserData.countDocuments();
    const totalCountries = await Countries.countDocuments();
    const totalRoutes = await PopularRoutes.countDocuments();
    res.json({ totalUsers, totalCountries, totalRoutes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
