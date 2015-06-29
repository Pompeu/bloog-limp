// file: tests/users.test.js - created at 2015-06-27, 12:51
var request = require('supertest');
var ch = require('charlatan');
var expect = require('chai').expect;
var baseURL = 'http://localhost:3000/api/';

describe('users api test', function () {
  var id = null;
  var user = null;

  it('it should be response 401 with credentiais error', function(done) {
    var user = {
      email : ch.Internet.email("jose"),
      password : ch.Number.number("8")
    }

    request(baseURL)
      .post('users/auth')
      .send(user)
      .expect(401)
      .end(endHandler)

    function endHandler (err , res) {
      expect(err).to.be.null;
      expect(res).to.be.ok;
      done();
    }
  });
  it('it should be reponse 200 for a credentiais ok ', function(done) {
     var user = {
      email : 'itacir@hotmail.com',
      password : "552525"
    }

    request(baseURL)
      .post('users/auth')
      .send(user)
      .expect(200)
      .end(endHandler)

    function endHandler (err , res) {
      expect(err).to.be.null;
      expect(res.body).to.be.ok;
      expect(res.body.result).to.have.property("id_token");
      done();
    }
  });
});
