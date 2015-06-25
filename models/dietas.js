// file: models/dietas.js - created at 2015-06-25, 04:23
function dietasHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;
  var schema = null;

  schema = new Schema({
    id: ObjectId,
    name: {type : String, required:true, trim:true ,unique: true},
    objetivo:  {type : String, required:true, trim:true},
    detalhes:  {type : String, required:true, trim:true},
    img:  {type : String, required:true, trim:true},
  });

  return restful.model('Dietas', schema);
}
module.exports = exports = dietasHandler();
 