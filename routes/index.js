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
module.exports = router;
