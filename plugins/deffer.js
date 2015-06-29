// file: plugins/deffer.js - created at 2015-06-27, 01:26
function defferHandler(method) {
  debug('plugin deffer promise');

  var q = require('promise');
    
  return q.denodeify(method);

}
module.exports = exports = defferHandler;
