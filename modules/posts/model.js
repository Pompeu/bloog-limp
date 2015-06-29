// file: models/posts.js - created at 2014-12-25, 09:02
function postsHandler() {

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;
  var schema = null;
  var timestemp = require('../../plugins/timestemp');
  
  schema = new Schema({
    id: ObjectId,
    titulo: {type : String, required:true, trim:true ,unique: true},
    body:  {type : String, required:true, trim:true},
    resumo:  {type : String, required:true, trim:true},
    tags:  {type : String, required:true, trim:true},   
  });

  schema.plugin(timestemp);

  return  mongoose.model("Posts", schema);
}
module.exports = exports = postsHandler();