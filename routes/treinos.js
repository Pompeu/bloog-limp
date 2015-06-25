// file: routes/treinos.js - created at 2015-06-25, 04:46
var express = require('express');
var router = express.Router();

models
  .Treinos
  .methods(['get', 'put', 'post', 'delete']);

models.Treinos.register(router,'/treinos');

module.exports = router;
