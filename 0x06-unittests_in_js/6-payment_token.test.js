const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', function() {
  it('Check The result', function(done) {
    this.timeout(0)
    getPaymentTokenFromAPI(true).then(function(data) {
      expect(data).to.deep.equal({data: 'Successful response from the API' });
      done();
    }).catch(done)
  })
})
