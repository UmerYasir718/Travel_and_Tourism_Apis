// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { SignUp } = require("../../Controllers/UserSignUp");
router.post("/signUp", SignUp);
module.exports = router;
