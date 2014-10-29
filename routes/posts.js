var Post    = require('../models/posts');

module.exports = function(app){

	addPost = function(req , res){
		var post = new Post({
			titulo : req.body.titulo,
			dados : req.body.dados,
			email : req.body.email,
 			data  : req.body.data
		});

		
		post.save(function(err){
			if(!err){
				return res.send('Salva com Sucesso');
			}else{
				res.send({erros : err});
				console.log(err);
				return;
			}
		});
	}

	findAllPost =  function(req, res){
		return Post.find(function (err, posts){
			if(!err){
				return res.send(posts);
			}else{
				res.statusCode = 500;
				console.log('Internal error(%d): %s',res.statusCode,err.message);
				return res.send({error : statusCode});
			}
		});
	}

	findById = function(req, res){
		return Post.findById(req.params.id , function(err, post){
			if(!post){
				res.statusCode = 404;
				return res.send({error : 'ID Não Econtrado'});
			}
			if(!err){
				console.log(req.params.id);
				return res.send({post:post});
				
			}else{
				res.statusCode = 500;
				return res.send({error : statusCode});
			}
		});

	}

	updatePost =  function(req, res){
		return Post.findById(req.params.id, function(err , post){
			if(!post){
				res.statusCode = 404;
				return res.send({error : 'Não Encontrador'})
			}

			if (req.body.titulo != null) post.titulo = req.body.titulo;
			if (req.body.dados != null) post.dados = req.body.dados;
			if (req.body.email  != null) post.email =  req.body.email;
 			if (req.body.data != null) post.data = req.body.data;

 			return post.save(function(err){
 				if(!err){
 					console.log("Update com Sucesso");
 					return res.send({post : post});
 				}else{
		 			if(err.name == 'ValidationError') {
		            	res.statusCode = 400;
		            	res.send({ error: 'Validation error' });
		          } else {
		            	res.statusCode = 500;
		            	res.send({ error: 'Server error' });
		          }
		          console.log('Internal error(%d): %s',res.statusCode,err.message);
 				}
 				res.send(post);
 			});
		});
	}
	deletePost = function(req, res){
		return Post.findById(req.params.id, function(err, post){
			if(!post){
				res.statusCode = 404;
				return res.send({error : 'Não encontrato'});
			}
			return post.remove(function(err){
				if(!err){
					return res.send({status: 'deletado'});
				}else{
					res.statusCode = 500;
			        console.log('Internal error(%d): %s',res.statusCode,err.message);
			        return res.send({ error: 'Server error' });

				}
			});
		});
	}
	app.get('/posts' ,findAllPost);
	app.get('/posts/:id',findById);
	app.post('/posts', addPost);
	app.put('/posts/:id', updatePost);
  	app.delete('/posts/:id', deletePost);	
	
}