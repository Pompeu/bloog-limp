// file: tests/posts.test.js - created at 2014-12-25, 10:36
var request = require('supertest');
var ch = require('charlatan');
var expect = require('chai').expect;
var baseURL = 'http://localhost:3000/api/';

describe('testing api posts', function () {
	var id = null;
	var post = null;

	it('should be create post', function (done) {
		post = {
			titulo : ch.Name.title(),
    		body :  ch.Lorem.text(),
    		resumo : ch.Lorem.word(),
    		tags :  ch.Lorem.words()
 		};

		request(baseURL)
 			.post('posts')
 			.send(post)
 			.expect(200)
 			.end(function(err,res) {
 				id = res.body.result._id;
 				expect(res).to.be.ok;
 				expect(err).to.be.null;
 				done();
 			});
	});

	it('should be get one from mongo by id',function (done) {

		request(baseURL)
 			.get('posts/'+id)
 			.expect(200)
 			.end(function(err,res) {
 				expect(post.titulo).to.equal(res.body.result[0].titulo);
 				expect(post.body).to.equal(res.body.result[0].body);
 				done();
 			});
	});
	
	it('should be get all post', function (done) {
		request(baseURL)
 			.get('posts/')
 			.expect(200)
 			.end(function(err,res) {			
 				expect(res.body.results.length > 0).to.be.true;
 				done();
 			});
	});

	it('should be update one post by mongo id',function (done) {
		post = {
			titulo : ch.Name.title(),
    		body :  ch.Lorem.text(),
    		tag :  ch.Lorem.words()
 		};
 		request(baseURL)
			.put('posts/'+id)
			.send(post)
			.expect(202,done);
	});

	it('should be delete one post by mongo id', function (done) {
		request(baseURL)
			.del('posts/'+id)
			.expect(200,done);
	});

	it('should be find body with text paramiter', function(done) {
		var text = "node"
		request(baseURL)
			.get('posts/fulltext/'+text)
			.expect(200,done)
	});
});