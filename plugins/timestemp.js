// file: plugins/timestemp.js - created at 2014-12-25, 09:07
function timestempHandler(schema, options) {
  options = options || {};
	schema.add({created_at : {type: Date, default : Date.now()}});
	schema.add({update_at : {type: Date,  default : Date.now()}});
  // start with plugin here

  function preSaveHandler(next) {
  	this.upadate_at = Date.now();
  	next();
  };

  schema.pre('save',preSaveHandler);
}
module.exports = exports = timestempHandler;
