var express = require('express');
var router = express.Router();

models
  .Dietas
  .methods(['get', 'put', 'post', 'delete']);

models.Dietas.register(router,'/dietas');

module.exports = router;
