const express = require("express");
const app = express();

// Connect mongoDB
const fileDB = require("./connection");

// imports the Routes and Models
const routeAdd = require("./routes/add");

// import body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/add", routeAdd);

app.get("/", (req, res) => {
  res.end("Welcome from server Node.js");
});

//config basic server
app.listen(3001, function () {
  console.log("Server running port 3001");
});
