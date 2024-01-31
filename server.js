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
app.get("/", (req, res) => {
  res.send("Hello World");
});
// const countriesRecord = require("./Models/CountryRecord");
const UserRoutes = require("./Routes/Users/UserRoutes");
const AdminCountry = require("./Routes/Administrator/AdminCountry");
const AdminRoutes = require("./Routes/Administrator/AdminRoutes");
const AdminLogin = require("./Routes/Administrator/AdminLogin");
const AdminContact = require("./Routes/Administrator/AdminContact");
const AdminCarouselPicture = require("./Routes/Administrator/AdminCarouselPicture");
const AdminDashBoard = require("./Routes/Administrator/AdminDashBoard");
const AdminVerification = require("./Controllers/MiddleWare/AdminVerification");
app.use("/", UserRoutes);
app.use("/", AdminCountry);
app.use("/", AdminRoutes);
app.use("/", AdminLogin);
app.use("/", AdminContact);
app.use("/", AdminCarouselPicture);
app.use("/", AdminDashBoard);
app.use("/", AdminVerification);
app.listen(process.env.PORT, () => {
  console.log(`Server IS RUNNING ON PORT ${process.env.PORT}`);
});
