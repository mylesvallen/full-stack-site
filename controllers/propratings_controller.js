var express = require("express");
var router = express.Router();
var dbModels = require('../models');




router.get('/guest', function(req, res) {
    res.render('property_ratings');
});




module.exports = router;