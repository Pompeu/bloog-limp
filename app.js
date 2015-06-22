var express = require('express'),
    app = express(),
    path = require('path'),
    favicon = require('serve-favicon'),
    compress = require('compression'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    sessions = require('client-sessions'),
    cors = require('cors'),
    csrf = require('csurf'),
    dburl = require('./configs/index').db,
    mongoose = require("mongoose").connect(dburl);

var restful = global.restful = require('node-restful'),   
    models = global.models = require('./models'),
    middlewares = global.middlewares = require('./middlewares');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
app.use(compress());
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable('x-powered-by');
app.enable('etag');

app.use(sessions(models.SessionDetails));
app.use(middlewares.sessionCheck);

var index = require('./routes/index'),
    post = require('./routes/posts'),
    users = require('./routes/users');

app.use('/',csrf(),index);
app.use('/api',csrf(),post);
app.use('/api',csrf(),middlewares.authrequired,users);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
