// file: models/posts.js - created at 2014-12-25, 09:02
function postsHandler() {

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;
  var schema = null;
  var timestemp = require('../plugins/timestemp');
  
  schema = new Schema({
    id: ObjectId,
    titulo: {type : String, required:true, trim:true ,unique: true},
    body:  {type : String, required:true, trim:true},
    tag:  {type : String, required:true, trim:true},   
  });

  schema.plugin(timestemp);

  return restful.model('Posts', schema);
}
module.exports = exports = postsHandler();
