//express makes it 
//easier to organize our app's 
//functionality with middleware and routing
var express = require("express");
// var app is an instance of express function
var app = express();
var bodyParser = require("body-parser");

<<<<<<< HEAD

var app = express();
var PORT = process.env.PORT || 3000;



var db = require("./models");
=======
//assigned var 'PORT' to a hosting service env
//or local host 3000
var PORT = process.env.PORT || 3000;
>>>>>>> origin

//this middleware is used to serve everything from 
//our 'public' directory (html,css,js,imgs)
app.use(express.static(__dirname + "/public"));

<<<<<<< HEAD
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
=======
// var routes = require("./routes/tenantLogin.js");
>>>>>>> origin


//will be use for handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
=======
var tenantLogin = require("./controllers/tenantlogin_controller.js");
app.use(tenantLogin);
>>>>>>> origin

var propertyRatings = require("./controllers/propratings_controller.js");
app.use(propertyRatings);

<<<<<<< HEAD

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

=======
//we call listen() 
//which binds our server to PORT  
app.listen(PORT, function() {
    console.log("Listening on PORT: ", PORT);
});
>>>>>>> origin
