var mongoose    = require("mongoose"),
   	Schema      = mongoose.Schema;

//Criando o model;
var PostsSchema = new Schema({
	titulo: {type : String, required:true, trin:true},
    dados:  {type : String, required:true, trim:true},
    email:  {type : String, required:true, trim:true},
    data :  {type : Date, default : Date.now} 
});

module.exports =  mongoose.model('Posts', PostsSchema);
