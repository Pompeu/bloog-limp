// file: middlewares/posts-update.js - created at 2015-06-27, 03:48
function postsUpdateHandler(req, res, next) {
  // start here with posts-update.js
  debug('postsUpdate handler middlewares');  
  var posts = require('../model');
  res.locals.out = {err : null , result :  {} , stats : false};

  posts.update({_id : req.params.id}, req.body , updateHandler);
   
  function failHandler (err) {
    debug('postsUpdateHandler middlewares failHandler');
    res.locals.out.err = err;
    next();
  }

  function successHanlder (result) {
    debug('postsUpdateHandler middlewares successHanlder');
    res.locals.out.result = result;
    res.locals.out.stats = true;
    next();
  }

  function updateHandler (err, result) {
    debug('postsUpdateHandler middlewares updateHandler');
    if(err) failHandler(err);
    else successHanlder(result);
  }
}
module.exports = exports = postsUpdateHandler;
