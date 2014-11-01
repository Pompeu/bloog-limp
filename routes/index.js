var express = require('express');
var router = express.Router();

/* GET home page. */ 
router.get('/index', function(req, res) {
  res.render('index', { title: 'Limp Bloog' });
});
router.get('/head', function(req, res){
	res.render ('head');
});
router.get('/', function(req, res){
	res.render('login', {title : 'Limp Bloog Login'});
});

router.get('/headCadastro', function(req, res){
	res.render('headCadastro');
});

router.get('/postagens' , function(req,res){
	res.render('postagens');
});

module.exports = router;
