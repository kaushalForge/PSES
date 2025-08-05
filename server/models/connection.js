const mongoose = require("mongoose");
const URI = process.env.URI;

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database Connected!");
  } catch (error) {
    console.log("Database Connection Failed:", error);
  }
};
