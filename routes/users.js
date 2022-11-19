var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  let userData = fs.readFileSync('./users.json');
  var siteUsers = JSON.parse(userData);
  var createdUsers = siteUsers;
  res.render('users', {createdUsers});
});

module.exports = router;
