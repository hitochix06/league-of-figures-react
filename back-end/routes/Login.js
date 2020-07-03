/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var Login = require('../controllers/Login');


/* POST login */
router.post('/', function(req, res, next) {
    res.json(Login.checkLogin(req));
});

module.exports = router;