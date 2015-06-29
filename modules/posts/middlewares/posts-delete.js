// file: middlewares/posts-delete.js - created at 2015-06-27, 03:42
function postsDeleteHandler(req, res, next) {
  // start here with posts-delete.js
  debug('postsDeleteHandler handler middlewares');
  var posts = require('../model');
  var id = req.params.id;
  res.locals.out = {err : null , result :  {}, stats : false};
  var promise = posts.remove({_id : id});
    
  promise.then(successHanlder,failHandler);  

  function failHandler (err) {
    debug('postsDeleteHandler middlewares failHandler');
    res.locals.out.err = err;
    next();
  }

  function successHanlder (result) {
    debug('postsDeleteHandler middlewares successHandelr');
    res.locals.out.result = result;
    res.locals.out.stats = true;
    next();
  }
}
module.exports = exports = postsDeleteHandler;
