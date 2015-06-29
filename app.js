var express = require('express'),
    app = express(),
    path = require('path'),
    favicon = require('serve-favicon'),
    compress = require('compression'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    dburl = require('./configs/index').db,
    mongoose = require("mongoose").connect(dburl);

var models = global.models = require('./models'),
    middlewares = global.middlewares = require('./middlewares'),
    controllers = global.controllers = require('./controllers');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
app.use(cors());
app.use(compress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.disable('x-powered-by');
app.enable('etag');
app.use(function (req, res, next) {
    if (req.url.match(/^\/(css|js|img|font)\/.+/)) {
        res.setHeader('Cache-Control', 'public, max-age=3600')
    }
    next();
});

var index = require('./routes/index'),
    posts = require('./modules/posts/routes'),
    users = require('./routes/users');

app.use('/',index);
app.use('/api/posts',posts);
app.use('/api/users',users);



module.exports = app;
