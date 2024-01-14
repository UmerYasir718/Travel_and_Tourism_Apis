const mongoose = require("mongoose");

const API_KEY = process.env.API_KEY_DATABASES;
async function dbConnect() {
  try {
    await mongoose.connect(API_KEY);

    console.log("Connected to DataBase SuccessFully");
  } catch (e) {
    console.error(e);
  }
}
dbConnect();
