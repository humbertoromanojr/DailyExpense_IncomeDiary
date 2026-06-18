const express = require("express");
const app = express();

// Connect mongoDB
const fileDB = require("./connection");

app.get("/", (req, res) => {
  res.end("Welcome from server Node.js");
});

//config basic server
app.listen(3001, function () {
  console.log("Server running port 3001");
});
