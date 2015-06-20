// file: middlewares/session-check.js - created at 2015-06-20, 06:12
function sessionCheckHandler(req, res, next) {
    if(req.session && req.session.user){
       models
       .Users
       .findOne({email : req.session.user.email},function(err,user) {
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
}

module.exports = exports = sessionCheckHandler;
