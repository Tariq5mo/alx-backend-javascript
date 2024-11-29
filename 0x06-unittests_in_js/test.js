const { describe, it } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe.only('getPaymentTokenFromAPI', function() {
  it('Check the result when success is true', function(done) {
    this.timeout(0);
    getPaymentTokenFromAPI(true).then(function(data) {
      expect(data).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
  });

/*   it('Check the result when success is false', function(done) {
    this.timeout(0);
    getPaymentTokenFromAPI(false).then(function(data) {
      expect(data).to.be.undefined;
      done();
    }).catch(done);
  });

  it('Check the result with sinon spy', function(done) {
    this.timeout(0);
    const spy = sinon.spy(getPaymentTokenFromAPI);
    getPaymentTokenFromAPI(true).then(function(data) {
      expect(spy.calledOnce).to.be.true;
      expect(data).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
  });*/
});
