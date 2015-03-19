var express = require('express');
var router = express.Router();

models.Users.methods(['get', 'put', 'post', 'delete']);  

models.Users.register(router,'/user');

module.exports = exports = router;