const express = require("express");
const router = express.Router();
const ContactForm = require("../../Models/ContactForm");
router.get("/contactMessage", async (req, res) => {
  try {
    const message = await ContactForm.find();
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.delete("/contactMessage/:id", async (req, res) => {
  const message = req.params.id;
  console.log(message);

  try {
    await ContactForm.findByIdAndDelete(message);
    res.json({ message: "Picture deleted successfully" });
  } catch (error) {
    res.json({ error: "Error deleting item" });
  }
});
module.exports = router;
