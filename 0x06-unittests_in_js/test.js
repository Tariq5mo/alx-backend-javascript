const { describe, it, before, after, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;
  let stub;

  before(function() {
    // Runs once before the first test in this block
    console.log('Starting tests for sendPaymentRequestToApi');
  });

  after(function() {
    // Runs once after the last test in this block
    console.log('Completed tests for sendPaymentRequestToApi');
  });

  beforeEach(function() {
    // Runs before each test in this block
    consoleSpy = sinon.spy(console, 'log');
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(function() {
    // Runs after each test in this block
    consoleSpy.restore();
    stub.restore();
  });

  it('check calling1', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(stub.calledOnce).to.be.true;
  });

  it('check calling2', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
  });

  it('check if The first argument is "SUM"', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stub.firstCall.args[0]).to.equal('SUM');
  });

  it('check if The second argument is 100', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stub.firstCall.args[1]).to.equal(100);
  });

  it('check if The third argument is 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stub.firstCall.args[2]).to.equal(20);
  });

  it('check if The calling function is Utils', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stub.firstCall.thisValue).to.equal(Utils);
  });

  it('check The output', function() {
    const result = sendPaymentRequestToApi(100, 20);
    expect(result).to.equal(10);
  });

  it('test normal case positive', function() {
    stub.returns(4);
    const result = sendPaymentRequestToApi(1, 3);
    expect(result).to.equal(4);
  });

  it('test normal case negative', function() {
    stub.returns(-4);
    const result = sendPaymentRequestToApi(-1, -3);
    expect(result).to.equal(-4);
  });

  it('test normal case with 0', function() {
    stub.returns(-1);
    const result = sendPaymentRequestToApi(-1, 0);
    expect(result).to.equal(-1);
  });

  it('test normal case with a positive, b negative', function() {
    stub.returns(-4);
    const result = sendPaymentRequestToApi(1, -5);
    expect(result).to.equal(-4);
  });

  it('test case (a) float less than a.5', function() {
    stub.returns(7);
    const result = sendPaymentRequestToApi(2.2, 5);
    expect(result).to.equal(7);
  });

  it('test case (a) float greater than or equal to a.5', function() {
    stub.returns(8);
    const result = sendPaymentRequestToApi(2.7, 5);
    expect(result).to.equal(8);
  });

  it('test case (b) float less than b.5', function() {
    stub.returns(7);
    const result = sendPaymentRequestToApi(2, 5.2);
    expect(result).to.equal(7);
  });

  it('test case (b) float greater than or equal to b.5', function() {
    stub.returns(8);
    const result = sendPaymentRequestToApi(2, 5.7);
    expect(result).to.equal(8);
  });

  it('test case both (a and b) float less than a.5, b.5', function() {
    stub.returns(7);
    const result = sendPaymentRequestToApi(2.2, 5.3);
    expect(result).to.equal(7);
  });

  it('test case both (a and b) float greater than or equal to a.5, b.5', function() {
    stub.returns(8);
    const result = sendPaymentRequestToApi(2.7, 5.5);
    expect(result).to.equal(8);
  });

  it('test case both (a and b) same value and float', function() {
    stub.returns(5.4);
    const result = sendPaymentRequestToApi(2.7, 2.7);
    expect(result).to.equal(5.4);
  });

  it('test case both (a and b) same value and int', function() {
    stub.returns(4);
    const result = sendPaymentRequestToApi(2, 2);
    expect(result).to.equal(4);
  });

  it('test case both (a and b) float and the return value is not the actual value', function() {
    stub.returns(5);
    const result = sendPaymentRequestToApi(2.5, 2.5);
    expect(result).to.equal(5);
  });

  it('test case both (a and b) float and the return value is not float', function() {
    stub.returns(5.2);
    const result = sendPaymentRequestToApi(2.5, 2.7);
    expect(result).to.equal(5.2);
  });
});
    stub.restore()