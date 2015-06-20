// file: configs/db.js - created at 2015-05-22, 07:46
function dbHandler() {
  var local = 'mongodb://localhost/pompeuapi'; 
  var mongolab = 'mongodb://ItacirPompeu:552525@ds049130.mongolab.com:49130/pompeuapi';

  return process.env.USER === 'pompeu'? local : mongolab;
}
module.exports = exports = dbHandler();
