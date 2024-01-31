const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const router = express.Router();
router.use(express.json());
router.use(cookieParser());
// const users = [{ email: "admin@example.com", password: "admin123" }];
const AdminLogin = require("../../Models/AdminLogin");
router.post("/admin", async (req, res) => {
  const { adminEmail, adminPassword } = req.body;
  // console.log(email, password);
  const existingUser = await AdminLogin.findOne({ adminEmail: adminEmail });
  if (!existingUser) {
    // User with the provided email does not exist, return an error response
    return res
      .status(400)
      .json({ success: false, message: "Account not exists" });
  }
  const isPasswordMatch = adminPassword === existingUser.adminPassword;
  if (!isPasswordMatch) {
    // User with the provided email does not exist, return an error response
    return res.status(400).json({ success: false, message: "Wrong Password" });
  }
  // const user = users.find(
  //   (u) => u.email === adminEmail && u.password === adminPassword
  // );

  if (isPasswordMatch) {
    const token = jwt.sign({ adminEmail }, process.env.SecretKey, {
      expiresIn: "1h",
    });
    // console.log(token);

    // Set the token in a cookie
    res.cookie("token", token, { httpOnly: true });
    res.json({
      success: true,
      token,
      message: "Login successful",
      existingUser,
    });
  }
  // if (user) {
  //   const token = jwt.sign({ user }, process.env.PRIVATE_KEY, {
  //     expiresIn: "10sec",
  //   });
  //   res.json({ user, token });
  //   console.log(token);
  // }
  else {
    res.status(401).json("Incorrect Details");
  }
});
// router.post("/admin", async (req, res) => {
//   const { adminEmail, adminPassword } = req.body;
//   console.log(req.body);
//   const existingUser = await AdminLogin.findOne({ adminEmail: adminEmail });

//   if (!existingUser) {
//     // User with the provided email does not exist, return an error response
//     return res
//       .status(400)
//       .json({ success: false, message: "Account not exists" });
//   }
//   const isPasswordMatch = adminPassword === existingUser.adminPassword;
//   if (!isPasswordMatch) {
//     // User with the provided email does not exist, return an error response
//     return res.status(400).json({ success: false, message: "Wrong Password" });
//   }
//   // const user = users.find(
//   //   (u) => u.email === adminEmail && u.password === adminPassword
//   // );

//   if (isPasswordMatch) {
//     const token = jwt.sign({ email: adminEmail }, process.env.SecretKey, {
//       expiresIn: "1h",
//     });
//     // console.log(token);

//     // Set the token in a cookie
//     res.cookie("token", token, { httpOnly: true });
//     res.json({
//       success: true,
//       token,
//       message: "Login successful",
//       existingUser,
//     });
//   } else {
//     res.status(401).json({ success: false, message: "Invalid credentials" });
//   }
// });
module.exports = router;
