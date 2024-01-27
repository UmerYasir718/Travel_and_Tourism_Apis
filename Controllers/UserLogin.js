const UserData = require("../Models/UserData");
module.exports.Login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    // Simple validation, ensure all fields are provided
    if (!userEmail || !userPassword) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    // Check if the user with the provided email exists
    const existingUser = await UserData.findOne({ userEmail: userEmail });

    if (!existingUser) {
      // User with the provided email does not exist, return an error response
      return res
        .status(400)
        .json({ success: false, message: "Account not exists" });
    }
    const isPasswordMatch = userPassword === existingUser.userPassword;

    if (!isPasswordMatch) {
      // Passwords do not match, return an error response
      return res
        .status(400)
        .json({ success: false, message: "Wrong Password" });
    }

    // If both email and password match, consider it a successful login
    res.json({
      success: true,
      message: "Login successful",
      user: existingUser,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
