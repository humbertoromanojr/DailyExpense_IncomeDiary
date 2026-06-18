const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crudmernstack");

const objetobd = mongoose.connection;

objetobd.on("connected", () => {
  console.log("Connect correct MongoDB");
});

objetobd.on("error", () => {
  console.log("Not connect on MongoDB");
});

module.exports = mongoose;
