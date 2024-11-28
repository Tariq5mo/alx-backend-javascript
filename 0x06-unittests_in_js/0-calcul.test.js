const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('Test the return value of calculateNumber', function () {
  it('Test normal case positive', function() {
    assert.strictEqual(calculateNumber(1, 3), 4, 'Values are not strictly equal');
  })

  it('Test normal case negative', function() {
    assert.strictEqual(calculateNumber(-1, -3), -4, 'Values are not strictly equal');
  })

  it('Test normal case with 0', function() {
    assert.strictEqual(calculateNumber(-1, 0), -1, 'Values are not strictly equal');
  })

  it('Test case (a) float less than a.5', function() {
    assert.strictEqual(calculateNumber(2.2, 5), 7, 'Values are not strictly equal');
  })

  it('Test case (a) float greater than or equal to a.5', function() {
    assert.strictEqual(calculateNumber(2.7, 5), 8, 'Values are not strictly equal');
  })

  it('Test case (b) float less than b.5', function() {
    assert.strictEqual(calculateNumber(2, 5.2), 7, 'Values are not strictly equal');
  })

  it('Test case (b) float greater than or equal to b.5', function() {
    assert.strictEqual(calculateNumber(2, 5.7), 8, 'Values are not strictly equal');
  })

  it('Test case both (a and b) float less than a.5, b.5', function() {
    assert.strictEqual(calculateNumber(2.2, 5.3), 7, 'Values are not strictly equal');
  })

  it('Test case both (a and b) float greater than or eual to a.5, b.5', function() {
    assert.strictEqual(calculateNumber(2.7, 5.5), 9, 'Values are not strictly equal');
  })

  it('Test case both (a and b) same value and float', function() {
    assert.strictEqual(calculateNumber(2.7, 2.7), 6, 'Values are not strictly equal');
  })

  it('Test case both (a and b) same value and int', function() {
    assert.strictEqual(calculateNumber(2, 2), 4, 'Values are not strictly equal');
  })

  it('Test case both (a and b) float and the return value is not the actual value', function() {
    assert.notStrictEqual(calculateNumber(2.5, 2.5), 5, 'Values are strictly equal');
  })

  it('Test case both (a and b) float and the return value is not float', function() {
    assert.notStrictEqual(calculateNumber(2.5, 2.7), 5.2, 'Values are strictly equal');
  })

  it('Test check if return value is "number"', function() {
    assert(typeof(calculateNumber(2.5, 2.7)) === 'number', 'This should not fail');
  })
});
