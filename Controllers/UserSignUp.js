const UserData = require("../Models/UserData");

module.exports.UserSignUp = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;

    // Simple validation, ensure all fields are provided
    if (!userEmail || !userPassword || !userName) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }
    const UserNameUnique = await UserData.findOne({ userName: userName });
    if (UserNameUnique) {
      // Email already exists, return an error response
      return res
        .status(400)
        .json({ success: false, message: "UserName not available" });
    }
    const existingUser = await UserData.findOne({ userEmail: userEmail });

    if (existingUser) {
      // Email already exists, return an error response
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    let nweUser = await UserData.create({
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    });
    res.json({ success: true, message: "Account Created successful", nweUser });
  } catch (error) {
    console.error("Error creating User:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
