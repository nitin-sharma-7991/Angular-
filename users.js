var express = require('express');
const users = require('../models/user');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Login Listing.  */


module.exports = router;
