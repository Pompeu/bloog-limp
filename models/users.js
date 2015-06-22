// file: models/users.js - created at 2014-12-25, 09:02
function usersHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;
  var schema = null;
  var timestemp = require('../plugins/timestemp');
  
  schema = new Schema({
    id: ObjectId,
    name : {type : String, required:true, trin:true},
    email : {type : String, required:true, trin:true , unique: true },
    password : {type : String, required:true, trin:true},
  });

  schema.plugin(timestemp);
  
  return restful.model('Users', schema);
}
module.exports = exports = usersHandler();
