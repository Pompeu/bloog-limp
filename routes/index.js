var express = require('express');
var router = express.Router();

router.get('/' , function(req , res){
	res.render('index.jade');	
});

router.get('/register',function(req, res) {
	res.render('register.jade');
});

router.get('/login',function(req,res) {
	res.render('login.jade');
});

router.get('/contato',function(req,res) {
	res.render('contato.jade');
});

router.get('/add-post',function(req,res) {
	res.render('add-post.jade');
});

router.get('/lerpost',function(req,res) {
	res.render('lerpost.jade');
});

router.get('/post-details',function(req,res) {
	res.render('post-details.jade');
});

router.get('/tutoriais',function(req,res) {
	res.render('tutoriais.jade');
});

router.get('/dashboard',function(req,res) {
	res.render('dashboard.jade');
});

module.exports = exports = router;