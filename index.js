const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");


//Connection string is created from environment file.
let connectionString = "mongodb://127.0.0.1:27017/";

const mongoDB = connectionString;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

app.use(cors());
app.use(bodyParser.json());

require("./routes")(app);

var port = 8000;

db.on("error", function (err) {
  console.log("Error connecting to DB", err);
});

// Starting the server

db.once("open", function () {
    console.log("DB connected", connectionString);
    app.listen(port, "0.0.0.0", function () {
      console.log("Express server listening on:" + port);
    });
});