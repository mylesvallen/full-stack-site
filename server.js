//express makes it 
//easier to organize our app's 
//functionality with middleware and routing
var express = require("express");
// var app is an instance of express function
var app = express();
var bodyParser = require("body-parser");

var db = require('./models');

//assigned var 'PORT' to a hosting service env
//or local host 3000
var PORT = process.env.PORT || 3000;

//this middleware is used to serve everything from 
//our 'public' directory (html,css,js,imgs)
app.use(express.static(__dirname + "/public"));

// var routes = require("./routes/tenantLogin.js");

app.use(bodyParser.urlencoded({ extended: false }));

//will be use for handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var tenantLogin = require("./controllers/tenantlogin_controller.js");
app.use(tenantLogin);

var propertyRatings = require("./controllers/propratings_controller.js");
app.use(propertyRatings);

//we call listen() 
//which binds our server to PORT  

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});