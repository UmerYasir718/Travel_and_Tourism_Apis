// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { PopularRoutes } = require("../../Controllers/UserPopularRoutes");
// Define user-related routes
router.get("/home/popularRoutes", PopularRoutes);

module.exports = router;
