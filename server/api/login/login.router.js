'use strict';

var router = require('express').Router();

var HttpError = require('../../utils/HttpError');
var User = require('../users/user.model');
var session = require('express-session');


router.post('/', function (req, res, next) {
	User.findOne({
		where: req.body
	})
	.then(function(user) {
		if(!user) {
			res.sendStatus(401);
		} else {
			req.session.userId = user.id;
			req.session.isAdmin = user.isAdmin;
			res.send(req.session);
		}
	})
	.catch(next);
});


router.get('/', function (req, res, next) {
	req.session.destroy(function(err){
		console.log(err);
	});
	res.sendStatus(204);

});


module.exports = router;