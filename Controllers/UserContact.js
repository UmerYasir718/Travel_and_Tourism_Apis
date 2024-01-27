const UserContact = require("../Models/ContactForm");
module.exports.Contact = async (req, res) => {
  try {
    const { firstName, lastName, email, subject, issue } = req.body;
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
};
