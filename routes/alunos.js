var express = require('express');
var router = express.Router();

models.Alunos.methods(['get', 'put', 'post', 'delete']);
models.Alunos.register(router,'/alunos');

module.exports = exports = router;