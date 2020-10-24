var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;
// var db = require("./models");

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});