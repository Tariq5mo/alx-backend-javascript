const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi  = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
  it('check calling', function() {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20)
    expect(spy.calledOnce).to.be.true;
    spy.restore()
  }),

  it('check if The first argument is "Sum"', function() {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20)
    expect(spy.firstCall.args[0]).to.equal('SUM');
    spy.restore()
  }),

  it('check if The second argument is 100', function() {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20)
    expect(spy.firstCall.args[1]).to.equal(100);
    spy.restore()
  }),

  it('check if The third argument is 20', function() {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20)
    expect(spy.firstCall.args[2]).to.equal(20);
    spy.restore()
  }),

  it('check if The calling function is Utils', function() {
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
  });
})
