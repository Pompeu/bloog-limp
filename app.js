
var express = require('express'),
    app = express(),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose    = require("mongoose"),
    sessions = require('client-sessions'),
    cors = require('cors'),
    csrf = require('csurf');

var restful = global.restful = require('node-restful');
var debug = global.debug = require('debug')('pompeuapi');
var models = global.models = require('./models');
var middlewares = global.middlewares = require('./middlewares');

function connectionHandler(err) {
    err = '123123'
    debug( err);
};


var local = 'mongodb://localhost/pompeuapi';
var mongolab = 'mongodb://pompeu:552525@ds049130.mongolab.com:49130/pompeuapi';

mongoose
    .connect(local)
    .connection
    .on('connected', connectionHandler)
    .on('error',function() {
        mongoose
        .connect(mongolab)
        .connection
        .on('connected', connectionHandler)
    });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.locals.pretty = true;

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessions({
    cookieName: 'session',
    secret : '3120j0wej0134ja0j9013asj0575a0934',
    duration : 7 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true, //navegador nunca acesse meus cookies
    secure: true, //cookier samento https
    ephemeral: true, //deletar cookie quando nevagador fechar

}));

app.use(function(req , res, next) {
    if(req.session && req.session.user){
       models.Users.findOne({email : req.session.user.email},function(err,user) {
            if(user){
                req.user = user;
                delete req.user.password;
                req.session.user = req.user;
                res.locals.user =  req.user;
            }
            next();
        });
    }else{
        next();
    }
});

var index = require('./routes/index'),
    post = require('./routes/posts'),
    users = require('./routes/users')
    alunos = require('./routes/alunos');

app.use('/api',cors(),alunos);   
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
