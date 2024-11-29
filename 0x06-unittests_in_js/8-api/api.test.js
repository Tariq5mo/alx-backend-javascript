const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const request = require('request');
const app = require('./api')

describe('test server', () => {
  it('should return 200', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should return Welcome to the payment system', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  });

  it('should return 404', (done) => {
    request.get('http://localhost:7865/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    })
  });
});
