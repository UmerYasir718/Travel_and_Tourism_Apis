const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const router = express.Router();
router.use(express.json());
router.use(cookieParser());
const users = [{ email: "admin@example.com", password: "admin123" }];
router.post("/admin", (req, res) => {
  const { adminEmail, adminPassword } = req.body;
  const user = users.find(
    (u) => u.email === adminEmail && u.password === adminPassword
  );

  if (user) {
    const token = jwt.sign({ email: adminEmail }, process.env.SecretKey, {
      expiresIn: "1h",
    });
    console.log(token);

    // Set the token in a cookie
    res.cookie("token", token, { httpOnly: true });
    res.json({
      success: true,
      token,
      message: "Login successful",
      user,
    });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});
module.exports = router;
