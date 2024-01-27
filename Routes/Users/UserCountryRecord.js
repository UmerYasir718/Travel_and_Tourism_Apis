// routes/userRoutes.js
const express = require("express");
const router = express.Router();
// const PopularRoutes = require("../../Models/PopularRoutes");
// Define user-related routes
const { CountryRecord } = require("../../Controllers/UserCountryRecord");
router.get("/find/:countryName", CountryRecord);

module.exports = router;
