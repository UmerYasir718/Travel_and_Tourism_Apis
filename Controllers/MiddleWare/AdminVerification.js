const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const router = express.Router();
const secretKey = process.env.SecretKey;
router.use(cors());
router.use(express.json());
router.use(cookieParser());
// Verify token route
router.get("/verify", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // const authHeader = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ success: false, message: "Token not Found" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "TimeOut Please Login Again" });
    }

    // Token is valid
    res.json({ success: true, username: decoded.adminEmail });
  });
});
module.exports = router;

// function authVerfiy(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == undefined) {
//     return res.sendStatus(401);
//   } else {
//     jwt.verify(token, process.env.PRIVATE_KEY, (err, email) => {
//       if (err) return res.sendStatus(403);
//       req.user = email;
//       next();
//     });
//   }
// }
