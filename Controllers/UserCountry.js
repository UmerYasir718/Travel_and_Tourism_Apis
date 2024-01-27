const Countries = require("../Models/Countries");
module.exports.Countries = async (req, res) => {
  try {
    const items = await Countries.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
