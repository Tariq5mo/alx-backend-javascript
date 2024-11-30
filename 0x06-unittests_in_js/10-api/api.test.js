const { describe, it} = require('mocha');
const { expect } = require('chai');
const request = require('request');
const express = require('express');
const app = require('./api')

app.use(express.json()); // Middleware to parse JSON bodies

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
  // ---------------------------------------

  it('should return 200', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should return Welcome to the payment system', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    })
  });

  it('should return 404', (done) => {
    request.get(' http://localhost:7865/cart/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    })
  });
  // ---------------------------------------

  it('should return 200', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should return Welcome to the payment system', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      const bodyObj = body
      expect(JSON.parse(bodyObj)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    })
  });

  it('should return 404', (done) => {
    request.get('http://localhost:7865/available_payments/hello', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    })
  });
  // ---------------------------------------
  it('should return 200', (done) => {
    request.post('http://localhost:7865/login', {form:{userName:'Betty'}}, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('should return Welcome to the payment system', (done) => {
    request.post('http://localhost:7865/login', {form:{userName:'Betty'}}, (err, res) => {
      expect(res.body).to.equal('Welcome Betty');
      done();
    })
  });

  it('should return 404', (done) => {
    request.post('http://localhost:7865/login/Betty', {form:{userName:'Betty'}}, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    })
  });
});
