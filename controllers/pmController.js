
var express = require("express");
var router = express.Router();
var dbModels= require("../models");

router.get('/login', function(req,res) {
	res.render('tenant');

});




module.exports = router;