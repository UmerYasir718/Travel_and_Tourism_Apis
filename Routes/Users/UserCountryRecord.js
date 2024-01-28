// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { CountryRecord } = require("../../Controllers/UserCountryRecord");
router.get("/find/:countryName", CountryRecord);

module.exports = router;
