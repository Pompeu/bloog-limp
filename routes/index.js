var express = require('express');
var router = express.Router();

/* GET home page. */ 
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/head', function(req, res){
	res.render ('head');
})

module.exports = router;
