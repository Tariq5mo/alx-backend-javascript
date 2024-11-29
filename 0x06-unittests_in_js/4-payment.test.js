const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi  = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
  let consoleSpy;
  let stub;

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
    sendPaymentRequestToApi(100, 20)
    expect(consoleSpy.calledOnce).to.be.true;
  })

  it('check calling2', function() {
    sendPaymentRequestToApi(100, 20)
    expect(stub.calledOnce).to.be.true;
  }),

  it('check the output', function() {
    sendPaymentRequestToApi(100, 20)
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  })

  it('check if The first argument is "Sum"', function() {
    sendPaymentRequestToApi(100, 20)
    expect(stub.firstCall.args[0]).to.equal('SUM');
  }),

  it('check if The second argument is 100', function() {
    sendPaymentRequestToApi(100, 20)
    expect(stub.firstCall.args[1]).to.equal(100);
  }),

  it('check if The third argument is 20', function() {
    sendPaymentRequestToApi(100, 20)
    expect(stub.firstCall.args[2]).to.equal(20);
  })

  /*it('check if The calling function is Utils', function() {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20)
    expect(spy.firstCall.thisValue).to.equal(Utils);
    spy.restore()
  }),

  it('check The output', function() {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(100, 20));
    spy.restore()
  }),

  it('test normal case positive', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(1, 3)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(1, 3));
    spy.restore()
  });

  it('test normal case negative', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(-1, -3)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(-1, -3));
    spy.restore()
  });

  it('test normal case with 0', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(-1, 0)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(-1, 0));
    spy.restore()
  });

  it('test normal case with a positive, b negative', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(1, -5)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(1, -5));
    spy.restore()
  });

  it('test case (a) float less than a.5', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2.2, 5)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2.2, 5));
    spy.restore()
  });

  it('test case (a) float greater than or equal to a.5', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2.7, 5)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2.7, 5));
    spy.restore()
  });

  it('test case (b) float less than b.5', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2, 5.2)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2, 5.2));
    spy.restore()
  });

  it('test case (b) float greater than or equal to b.5', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2, 5.7)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2, 5.7));
    spy.restore()
  });

  it('test case both (a and b) float less than a.5, b.5', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2.2, 5.3)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2.2, 5.3));
    spy.restore()
  });

  it('test case both (a and b) float greater than or equal to a.5, b.5', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2.7, 5.5)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2.7, 5.5));
    spy.restore()
  });

  it('test case both (a and b) same value and float', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2.7, 2.7)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2.7, 2.7));
    spy.restore()
  });

  it('test case both (a and b) same value and int', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2, 2)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2, 2));
    spy.restore()
  });

  it('test case both (a and b) float and the return value is not the actual value', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2.5, 2.5)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2.5, 2.5));
    spy.restore()
  });

  it('test case both (a and b) float and the return value is not float', () => {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(2.5, 2.7)
    expect(spy.firstCall.returnValue).to.equal(sendPaymentRequestToApi(2.5, 2.7));
    spy.restore()
  }); */
})
