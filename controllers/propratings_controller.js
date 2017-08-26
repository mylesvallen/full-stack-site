var express = require("express");
var router = express.Router();
var dbModels = require('../models');




router.get('/guest', function(req, res) {
    var myDbWIllCreateThis = [];
    res.render('property_ratings', { ratings_data: myDbWIllCreateThis });
});




module.exports = router;