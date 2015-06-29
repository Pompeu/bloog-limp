// file: middlewares/posts-get.js - created at 2015-06-27, 01:15
function postsGetHandler(req, res, next) {
  // start here with posts-get.js
  debug('postsGetHandler middlewares ');
  var posts = require('../model');
  res.locals.out = {err : null , result :  {} , stats : false};

  var promise = posts.find({_id : req.params.id}).exec();
  promise.then(successHanlder, failHandler);

  function failHandler (err) {
    debug('postsGetHandler middlewares failHandler');
    res.locals.out.err = err;
    next();
  }

  function successHanlder (result) {
    debug('postsGetHandler middlewares successHanlder');
    res.locals.out.result = result;
    res.locals.out.stats = true;
    next();
  }  
}
module.exports = exports = postsGetHandler;
