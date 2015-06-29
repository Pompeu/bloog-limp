// file: middlewares/posts-getall.js - created at 2015-06-27, 01:15
function postsGetTextHandler(req, res, next) {
  // start here with posts-getall.js
  debug('posts getall handler middlewares');
  var posts = require('../model');
  res.locals.out = {err : null , results :  [] , status : false};
  var text = req.params.text;
  var promise = posts.find({ $text : { $search : text } } ).exec();
 
  promise.then(successHanlder, failHandler);

  function failHandler (err) {
    debug('getTextHandler middlewares failHandler');
    res.locals.out.err = err;
    next();
  }

  function successHanlder (results) {
    debug('getTextHandler middlewares successHanlder');
    if(results.length === 0 ){
      res.locals.out.results = [
        { 
          titulo : "Não Foi Controlado nada",
          resumo: "No results try again"
        }
      ];
    }else{
      res.locals.out.results = results;
    }
    res.locals.out.status = true;
    next();
  } 
}

module.exports = exports = postsGetTextHandler;
