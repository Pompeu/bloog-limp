// file: middlewares/posts-post.js - created at 2015-06-27, 12:27
function postsPostHandler(req, res, next) {
  // start here with posts-post.js
  debug('postsPostHandler handler middlewares');
  var posts = require('../model');
  res.locals.out = {err : null , result :  {}, stats : false};
  var promise = posts.create(req.body);
    
  promise.then(successHanlder,failHandler);  

  function failHandler (err) {
    debug('postsPostHandler middlewares failHandler');
    res.locals.out.err = err;
    next();
  }

  function successHanlder (result) {
    debug('postsPostHandler middlewares successHanlder');
    res.locals.out.result = result;
    res.locals.out.stats = true;
    next();
  } 

}
module.exports = exports = postsPostHandler;
