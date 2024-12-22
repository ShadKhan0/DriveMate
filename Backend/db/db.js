const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.CONNECT_DB)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
