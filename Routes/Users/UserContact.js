// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
const { Contact } = require("../../Controllers/UserContact");
// Define user-related routes
router.use(cors());
router.post("/contact", Contact);
module.exports = router;
