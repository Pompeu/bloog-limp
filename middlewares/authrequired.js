// file: middlewares/authrequired.js - created at 2014-12-29, 11:19
function authrequiredHandler(req, res, next) {

	debug('authrequired middlerware');
  	if(!req.user){
  		res.redirect('/#login');
  		next();
	}else {
		next();
	}
}
module.exports = exports = authrequiredHandler;
