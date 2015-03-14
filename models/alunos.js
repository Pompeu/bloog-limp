// file: models/alunos.js - created at 2015-03-13, 11:58
function alunosHandler() {
  var mongoose = require('mongoose'); 
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;
  var schema = null;

  schema = new Schema({
    id: ObjectId,
    name : {type : String, required:true, trin:true},
    cpf : {type : String, required:true},
    email : {type : String, required:true, unique: true },
    matricula : {type : String, required:true},
  });
  
  return restful.model('Alunos', schema);
}
module.exports = exports = alunosHandler();
