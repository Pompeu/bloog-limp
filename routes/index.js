var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');


router.get('/' , function(req , res){
	res.render('index.jade');	
});

router.get('/register',function(req, res) {
	res.render('register.jade',{ csrfToken :  req.csrfToken() });
});

router.post('/register',middlewares.authrequired,function(req, res) {
	var hash = bcrypt.hashSync(req.body.password , bcrypt.genSaltSync(10));
	var user = new models.Users({
		name : req.body.name,
		sname : req.body.sname,	
		email	 : req.body.email,
		password : hash,
	});

	user.save(function(err) {
		if(err){
			var error = 'Algo esta errado';
			if(err.code === 11000){
				error = "Esse email ja esta em uso tente outro";
			}
			res.render('register.jade',{error :error});
		}else{
			res.redirect('/#postar');
		}
	});
});

router.get('/login',function(req,res) {
	res.render('login.jade',{ csrfToken :  req.csrfToken() });
});

router.post('/login',function(req, res) {
	models.Users.findOne({email: req.body.email},function(err, user) {
		if(!user){
			res.render('login.jade',{error : 'Email ou senha Invalidos'});
		}else{
			if(bcrypt.compareSync(req.body.password , user.password)){
				req.session.user = user; // recebendo os dados para session
				res.redirect('/#postar');
			}else{
				res.render('login.jade',{error : 'Email ou senha Invalidos'});
			}
		}

	});
});

router.get('/contato',function(req,res) {
	res.render('contato.jade');
});

router.get('/postar',function(req,res) {
	res.render('postar.jade',{ csrfToken :  req.csrfToken() });
});

router.get('/lerpost',function(req,res) {
	res.render('lerpost.jade');
});

router.get('/logout',function(req,res) {
	req.session.reset();
	res.redirect('/');
});

router.get('/dashboard',function(req,res) {
	res.render('dashboard.jade',{user : req.user});
});


module.exports = exports = router;