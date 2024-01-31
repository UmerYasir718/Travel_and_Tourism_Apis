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
  // res.send("Hello world");
  // console.log("object");
  // console.log("Cookies:", req.cookies);
  // const token = req.cookies.token;
  // console.log(req.headers);
  const authHeader = req.headers["authorization"];
  // console.log(authHeader);

  if (!authHeader) {
    return res.status(401).json({ success: false, message: "Sign not found" });
  }

  jwt.verify(authHeader, secretKey, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "TimeOut Please Login Again" });
    }

    // Token is valid
    res.json({ success: true, username: decoded.email });
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
