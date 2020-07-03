/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var cree = require('../controllers/cree');

/* POST user */
router.post('/cree', function(req, res) {
  cree.creeUser(req, res);
});

module.exports = router;


