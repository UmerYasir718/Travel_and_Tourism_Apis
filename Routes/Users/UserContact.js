// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
const UserContact = require("../../Models/ContactForm");
// Define user-related routes
router.use(cors());
router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, subject, issue } = req.body;
    console.log(req.body);
    console.log(firstName, lastName, email, subject, issue);
    // Simple validation, ensure all fields are provided
    if (!firstName || !lastName || !email || !subject || !issue) {
      return res.status(400).json({ error: "Please Fill all required fields" });
    } else {
      let usercontact = await UserContact.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        issue: issue,
      });
      res.json({
        success: true,
        message: `Thank You For Contact Us`,
      });
    }
  } catch (error) {
    console.error("Error during Contact Try again:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
