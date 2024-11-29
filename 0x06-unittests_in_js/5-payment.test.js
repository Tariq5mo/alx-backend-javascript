const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi  = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function() {
    // Runs before each test in this block
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Runs after each test in this block
    consoleSpy.restore();
  });

  it('check calling of console and it is value', function() {
    sendPaymentRequestToApi(100, 20)
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  }),

  it('check calling of console and it is value', function() {
    sendPaymentRequestToApi(10, 10)
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  })
})
