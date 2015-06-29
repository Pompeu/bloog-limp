// file: middlewares/users-auth.js - created at 2015-06-27, 12:14
var jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs'),
    getSecret =  require('../configs/apikey');
function usersAuthHandler(req, res, next) {
  // start here with users-auth.js
  debug('usersAuthHandler middlewares ');

  res.locals.out = {err : null , result : { } , status : false};

  models
    .Users
    .find({ email : new RegExp('^'+req.body.email+'$', "i")},authUserHandler)
  

  function failHandler (err) {
    debug('usersAuthHandler middlewares failHandler');
    res.sendStatus(401);
  }

  function successHandler (result) {
    debug('usersAuthHandler middlewares successHanlder');
    debug('auth success handler');
    res.locals.out.status = true;
    res.locals.out.result = result;
    next(); 
  }

  function authUserHandler (err , result) {
    debug('usersAuthHandler middlewares');
    if(result && result.length == 1){
      bcrypt.compare( req.body.password, result[0].password, function(err, res) {
        if(res){
          result[0].password = '123';
          successHandler({ id_token : createToken(result[0])});
        } 
        else failHandler(err);
      });             
    }else{
      failHandler(err);
    }
  } 
}

function createToken (result) {
  debug('createToken middlewares successHanlder');
  var key = getSecret();
  return jwt.sign(result,key.value , { expiresInMinutes: 60*5 });
}
module.exports = exports = usersAuthHandler;
