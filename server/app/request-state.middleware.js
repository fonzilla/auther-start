'use strict'; 

var router = require('express').Router();
var session = require('express-session');

router.use(function (req, res, next) {
  var bodyString = '';
  req.on('data', function (chunk) {
    bodyString += chunk;
  });
  req.on('end', function () {
    bodyString = bodyString || '{}';
    req.body = eval('(' + bodyString + ')');
    next();
  });
});


router.use(session({
  secret: 'bulbasaur' // or whatever you like
}));

router.use(function (req, res, next) {
  console.log('session', req.session);
  next();
});


module.exports = router;
