// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { Countries } = require("../../Controllers/UserCountry");
// Define user-related routes
router.get("/home/countries", Countries);

module.exports = router;
