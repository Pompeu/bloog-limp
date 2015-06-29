// file: middlewares/posts-getall.js - created at 2015-06-27, 01:15
function postsGetallHandler(req, res, next) {
  // start here with posts-getall.js
  debug('posts getall handler middlewares');
  var posts = require('../model');
  res.locals.out = {err : null , results :  [] , status : false};
  var promise = posts.find({}).sort('-created_at').exec();
 
  promise.then(successHanlder, failHandler);

  function failHandler (err) {
    debug('getallHandler middlewares failHandler');
    res.locals.out.err = err;
    next();
  }

  function successHanlder (results) {
    debug('getallHandler middlewares successHanlder');
    res.locals.out.results = results;
    res.locals.out.status = true;
    next();
  } 
}

module.exports = exports = postsGetallHandler;
