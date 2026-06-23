const express = require("express");
const app = express();

// Connect mongoDB
const fileDB = require("./connection");

// imports the Routes and Models
const routeItem = require("./routes/Item");

// import body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/Item", routeItem);

app.get("/", (req, res) => {
  res.end("Welcome from server Node.js");
});

//config basic server
app.listen(3001, function () {
  console.log("Server running port 3001");
});
