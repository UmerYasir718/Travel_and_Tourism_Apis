const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fileUpload = require("express-fileupload");
const app = express();
require("dotenv/config");
require("./DataBase/database");

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
const countriesRecord = require("./Models/CountryRecord");
app.get("/find/:countryName", async (req, res) => {
  try {
    const { countryName } = req.params;
    console.log(countryName);

    // Use the countryName parameter to filter data in the MongoDB collection
    const data = await countriesRecord.findOne({ country: countryName });
    if (!data) {
      res.status(404).json({ error: "Country not found" });
      return;
    }

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const UserCountry = require("./Routes/Users/UserCountry");
const UserRoutes = require("./Routes/Users/UserRoutes");
const UserLogin = require("./Routes/Users/UserLogin");
const UserSignUp = require("./Routes/Users/UserSignUp");
const AdminCountry = require("./Routes/Administrator/AdminCountry");
const AdminRoutes = require("./Routes/Administrator/AdminRoutes");
const AdminLogin = require("./Routes/Administrator/AdminLogin");
app.use("/", UserCountry);
app.use("/", UserRoutes);
app.use("/", UserLogin);
app.use("/", UserSignUp);
app.use("/", AdminCountry);
app.use("/", AdminRoutes);
app.use("/", AdminLogin);
app.listen(process.env.PORT, () => {
  console.log(`Server IS RUNNING ON PORT ${process.env.PORT}`);
});
