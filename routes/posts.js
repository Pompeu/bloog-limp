var express = require('express');
var router = express.Router();

function postHandler(req, res) {
	debug("Post handler");
	res.redirect('/');
};


models.Posts.methods(['get', 'put', 'post', 'delete'])
	.before('post',middlewares.authrequired)
	.before('put',middlewares.authrequired)
	.before('delete',middlewares.authrequired)
	.after('post',postHandler)

models.Posts.register(router,'/post');

module.exports = exports = router;