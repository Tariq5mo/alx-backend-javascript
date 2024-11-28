/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const { describe } = require('mocha');
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test calculateNumber function', () => {
  describe('test adding case', () => {
    it('test normal case positive', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4, 'Values are not strictly equal');
    });

    it('test normal case negative', () => {
      assert.strictEqual(calculateNumber('SUM', -1, -3), -4, 'Values are not strictly equal');
    });

    it('test normal case with 0', () => {
      assert.strictEqual(calculateNumber('SUM', -1, 0), -1, 'Values are not strictly equal');
    });

    it('test normal case with a positive, b negative', () => {
      assert.strictEqual(calculateNumber('SUM', 1, -5), -4, 'Values are not strictly equal');
    });

    it('test case (a) float less than a.5', () => {
      assert.strictEqual(calculateNumber('SUM', 2.2, 5), 7, 'Values are not strictly equal');
    });

    it('test case (a) float greater than or equal to a.5', () => {
      assert.strictEqual(calculateNumber('SUM', 2.7, 5), 8, 'Values are not strictly equal');
    });

    it('test case (b) float less than b.5', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 5.2), 7, 'Values are not strictly equal');
    });

    it('test case (b) float greater than or equal to b.5', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 5.7), 8, 'Values are not strictly equal');
    });

    it('test case both (a and b) float less than a.5, b.5', () => {
      assert.strictEqual(calculateNumber('SUM', 2.2, 5.3), 7, 'Values are not strictly equal');
    });

    it('test case both (a and b) float greater than or eual to a.5, b.5', () => {
      assert.strictEqual(calculateNumber('SUM', 2.7, 5.5), 9, 'Values are not strictly equal');
    });

    it('test case both (a and b) same value and float', () => {
      assert.strictEqual(calculateNumber('SUM', 2.7, 2.7), 6, 'Values are not strictly equal');
    });

    it('test case both (a and b) same value and int', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 2), 4, 'Values are not strictly equal');
    });

    it('test case both (a and b) float and the return value is not the actual value', () => {
      assert.notStrictEqual(calculateNumber('SUM', 2.5, 2.5), 5, 'Values are strictly equal');
    });

    it('test case both (a and b) float and the return value is not float', () => {
      assert.notStrictEqual(calculateNumber('SUM', 2.5, 2.7), 5.2, 'Values are strictly equal');
    });

    it('test check if return value is "number"', () => {
      assert(typeof (calculateNumber('SUM', 2.5, 2.7)) === 'number', 'This should not fail');
    });
  });
  describe('test subtracting case', () => {
    it('test normal case positive', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2, 'Values are not strictly equal');
    });

    it('test normal case negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2, 'Values are not strictly equal');
    });

    it('test normal case a negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 3), -4, 'Values are not strictly equal');
    });

    it('test normal case b negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, -3), 4, 'Values are not strictly equal');
    });

    it('test normal case with b = 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 0), -1, 'Values are not strictly equal');
    });

    it('test normal case with a = 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, -1), 1, 'Values are not strictly equal');
    });

    it('test case (a) float less than a.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 5), -3, 'Values are not strictly equal');
    });

    it('test case (a) float greater than or equal to a.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 5), -2, 'Values are not strictly equal');
    });

    it('test case (b) float less than b.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 5.2), -3, 'Values are not strictly equal');
    });

    it('test case (b) float greater than or equal to b.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 5.7), -4, 'Values are not strictly equal');
    });

    it('test case both (a and b) float less than a.5, b.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 5.3), -3, 'Values are not strictly equal');
    });

    it('test case both (a and b) float greater than or eual to a.5, b.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 5.5), -3, 'Values are not strictly equal');
    });

    it('test case a negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.7, 5.5), -9, 'Values are not strictly equal');
    });

    it('test case b negative', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, -2.7), 6, 'Values are not strictly equal');
    });

    it('test case both (a and b) same value and int', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 2), 0, 'Values are not strictly equal');
    });

    it('test case both (a and b) float and the return value is not the actual value', () => {
      assert.notStrictEqual(calculateNumber('SUBTRACT', 2.5, -2.5), 5, 'Values are strictly equal');
    });

    it('test case both (a and b) float and the return value is not float', () => {
      assert.notStrictEqual(calculateNumber('SUBTRACT', 2.5, -2.7), 5.2, 'Values are strictly equal');
    });

    it('test check if return value is "number"', () => {
      assert(typeof (calculateNumber('SUBTRACT', 2.5, 2.7)) === 'number', 'This should not fail');
    });
  });
  describe('test dividing case', () => {
    it('test normal case positive', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 25, 5), 5, 'Values are not strictly equal');
    });

    it('test normal case negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -25, -5), 5, 'Values are not strictly equal');
    });

    it('test normal case a negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -25, 5), -5, 'Values are not strictly equal');
    });

    it('test normal case b negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 25, -5), -5, 'Values are not strictly equal');
    });

    it('test normal case with b = 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 25, 0), 'Error', 'Values are not strictly equal');
    });

    it('test normal case with a = 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, -1), -0, 'Values are not strictly equal');
    });

    it('test normal case with a = 0, b positive', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 1), 0, 'Values are not strictly equal');
    });

    it('test normal case with a = 0, b is 0 and less than 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.2), 'Error', 'Values are not strictly equal');
    });

    it('test normal case with a = 0, b is 0 and greater than 0.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.7), 1, 'Values are not strictly equal');
    });

    it('test case (a) float less than a.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 25.2, 5), 5, 'Values are not strictly equal');
    });

    it('test case (a) float greater than or equal to a.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 24.7, 5), 5, 'Values are not strictly equal');
    });

    it('test case (b) float less than b.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 25, 5.2), 5, 'Values are not strictly equal');
    });

    it('test case (b) float greater than or equal to b.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 25, 4.7), 5, 'Values are not strictly equal');
    });

    it('test case both (a and b) float less than a.5, b.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 25.2, 5.3), 5, 'Values are not strictly equal');
    });

    it('test case both (a and b) float greater than or eual to a.5, b.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 24.7, 4.5), 5, 'Values are not strictly equal');
    });

    it('test case a negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -24.7, 4.5), -5, 'Values are not strictly equal');
    });

    it('test case b negative', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 24.7, -4.7), -5, 'Values are not strictly equal');
    });

    it('test case both (a and b) same value and int', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 2), 1, 'Values are not strictly equal');
    });

    it('test case both (a and b) float and the return value is not the actual value', () => {
      assert.notStrictEqual(calculateNumber('DIVIDE', 3.2,3), 1.0666666666666667, 'Values are strictly equal');
    });

    it('test check if return value is "number"', () => {
      assert(typeof (calculateNumber('DIVIDE', 2.5, 2.7)) === 'number', 'This should not fail');
    });
  });
});
