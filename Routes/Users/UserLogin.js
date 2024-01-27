// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { Login } = require("../../Controllers/UserLogin");
// Define user-related routes
router.post("/login", Login);

module.exports = router;
