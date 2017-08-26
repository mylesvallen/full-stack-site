var express = require("express");
var router = express.Router();
var dbModels = require('../models');

//-----------------------------------
//need to require models folder here
//-----------------------------------

router.get('/login', function(req, res) {
    res.render('tenant_login');
});
router.get('/login/user', function(req, res) {
    res.render('login_user');
});

// router.post('/login', function (req, res) {
//     read.redirect('/login')
// });

module.exports = router;