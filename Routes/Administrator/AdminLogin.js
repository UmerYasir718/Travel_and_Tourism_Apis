const express = require("express");
const cors = require("cors");
const router = express.Router();
const users = [{ email: "admin@example.com", password: "admin123" }];
router.post("/admin", (req, res) => {
  const { adminEmail, adminPassword } = req.body;
  const user = users.find(
    (u) => u.email === adminEmail && u.password === adminPassword
  );

  if (user) {
    // const token = generateToken(user);
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});
module.exports = router;
