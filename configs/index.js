// file: configs/index.js
var env = process.env.NODE_ENV || 'development';
exports.db = require('./db');
exports.apikey = require('./apikey')(env);
