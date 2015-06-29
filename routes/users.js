var express = require('express');
var router = express.Router();

router
  .post('/',middlewares.usersAdd,controllers.usersAdd) 
  .post('/auth',middlewares.usersAuth,controllers.usersAuth) 

module.exports = exports = router;