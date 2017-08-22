var express = require("express");
var router = express.Router();
var dbModels = require('./models');

//-----------------------------------
//need to require models folder here
//-----------------------------------

router.get('/login', function(res, req) {
    res.render('./views/tenant.html');
});