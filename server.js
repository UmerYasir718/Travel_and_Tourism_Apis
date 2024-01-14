const express = require("express");
const cors = require("cors");
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

const UserCountry = require("./Routes/Users/UserCountry");
const UserRoutes = require("./Routes/Users/UserRoutes");
const AdminCountry = require("./Routes/Administrator/AdminCountry");
const AdminRoutes = require("./Routes/Administrator/AdminRoutes");
app.use("/", UserCountry);
app.use("/", UserRoutes);
app.use("/", AdminCountry);
app.use("/", AdminRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server IS RUNNING ON PORT ${process.env.PORT}`);
});
