var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: false }));

var routes = require("./controllers/pmController.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


app.listen(PORT, function() {
    console.log("Listening on port:%s", PORT);
});