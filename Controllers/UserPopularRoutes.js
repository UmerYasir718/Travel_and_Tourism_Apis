const PopularRoutes = require("../../Models/PopularRoutes");
module.exports.PopularRoutes = async (req, res) => {
  try {
    const routes = await PopularRoutes.find();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
