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
    		tag :  ch.Lorem.words()
 		}

 		request(baseURL)
 			.post('posts')
 			.send(post)
 			.expect(200)
 			.end(function(err,res) {
 				id = res.body.result._id;
 				done();
 			});
	});
	
	it('should be get one by mongo id',function(done) {
		request(baseURL)
 			.get('posts/'+id)
 			.expect(200)
 			.end(function(err,res) {
 				/*chai there for same asserts*/
 				expect(post.titulo).to.equal(res.body.result.titulo);
 				expect(post.body).to.equal(res.body.result.body);
 				done();
 			});
	});
	
	it('should be get all post', function(done) {
		request(baseURL)
 			.get('posts/')
 			.expect(200)
 			.end(function(err,res) {
 				/*chai teste len */ 				
 				expect(res.body.results.length > 0).to.be.true;
 				done();
 			});
	});

	it('should be update one post by mongo id',function(done) {
		post = {
			titulo : ch.Name.title(),
    		body :  ch.Lorem.text(),
    		tag :  ch.Lorem.words()
 		}

 		request(baseURL)
			.put('posts/'+id)
			.send(post)
			.expect(202,done);
			

	});
});
