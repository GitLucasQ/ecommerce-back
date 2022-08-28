"use strict";

var chai = require('chai');

var chaiHttp = require('chai-http');

var expect = chai.expect;
var URL = "http://localhost:8080";
chai.use(chaiHttp);
describe('POST Insert a product', function () {
  it('should insert a product', function (done) {
    chai.request(URL).post('/api/product/new').send({
      name: 'product-test',
      price: 10,
      photo: 'url-test'
    }).end(function (_err, res) {
      expect(res).to.have.status(201);
      done();
    });
  });
});
describe('GET List all products', function () {
  it('should return all products', function (done) {
    chai.request(URL).get('/api/product').end(function (_err, res) {
      expect(res).to.have.status(200);
      expect('Content-Type', /json/);
      done();
    });
  });
});
describe('GET Find a product', function () {
  it('should return a product', function (done) {
    chai.request(URL).get('/api/product/62788733c080de577e477608').end(function (_err, res) {
      expect(res).to.have.status(200);
      expect('Content-Type', /json/);
      done();
    });
  });
});
describe('PUT Update a product', function () {
  it('should update a product', function (done) {
    chai.request(URL).put('/api/product/update/62dc4dd688debb23d72f642f').send({
      price: 20.5
    }).end(function (_err, res) {
      expect(res).to.have.status(200);
      done();
    });
  });
});