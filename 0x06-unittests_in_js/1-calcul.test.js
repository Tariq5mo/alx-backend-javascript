const { describe } = require("mocha");
const calculateNumber = require('./1-calcul');
const assert = require('assert');


describe('Test calculateNumber function', function () {
  describe('Test adding case', function() {
    it('Test normal case positive', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4, 'Values are not strictly equal');
    })

    it('Test normal case negative', function() {
      assert.strictEqual(calculateNumber('SUM', -1, -3), -4, 'Values are not strictly equal');
    })

    it('Test normal case with 0', function() {
      assert.strictEqual(calculateNumber('SUM', -1, 0), -1, 'Values are not strictly equal');
    })

    it('Test normal case with a positive, b negative', function() {
      assert.strictEqual(calculateNumber('SUM', 1, -5), -4, 'Values are not strictly equal');
    })

    it('Test case (a) float less than a.5', function() {
      assert.strictEqual(calculateNumber('SUM', 2.2, 5), 7, 'Values are not strictly equal');
    })

    it('Test case (a) float greater than or equal to a.5', function() {
      assert.strictEqual(calculateNumber('SUM', 2.7, 5), 8, 'Values are not strictly equal');
    })

    it('Test case (b) float less than b.5', function() {
      assert.strictEqual(calculateNumber('SUM', 2, 5.2), 7, 'Values are not strictly equal');
    })

    it('Test case (b) float greater than or equal to b.5', function() {
      assert.strictEqual(calculateNumber('SUM', 2, 5.7), 8, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float less than a.5, b.5', function() {
      assert.strictEqual(calculateNumber('SUM', 2.2, 5.3), 7, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float greater than or eual to a.5, b.5', function() {
      assert.strictEqual(calculateNumber('SUM', 2.7, 5.5), 9, 'Values are not strictly equal');
    })

    it('Test case both (a and b) same value and float', function() {
      assert.strictEqual(calculateNumber('SUM', 2.7, 2.7), 6, 'Values are not strictly equal');
    })

    it('Test case both (a and b) same value and int', function() {
      assert.strictEqual(calculateNumber('SUM', 2, 2), 4, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float and the return value is not the actual value', function() {
      assert.notStrictEqual(calculateNumber('SUM', 2.5, 2.5), 5, 'Values are strictly equal');
    })

    it('Test case both (a and b) float and the return value is not float', function() {
      assert.notStrictEqual(calculateNumber('SUM', 2.5, 2.7), 5.2, 'Values are strictly equal');
    })

    it('Test check if return value is "number"', function() {
      assert(typeof(calculateNumber('SUM', 2.5, 2.7)) === 'number', 'This should not fail');
    })
  })
  describe('Test subtracting case', function() {
    it('Test normal case positive', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2, 'Values are not strictly equal');
    })

     it('Test normal case negative', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2, 'Values are not strictly equal');
    })

    it('Test normal case a negative', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 3), -4, 'Values are not strictly equal');
    })

    it('Test normal case b negative', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, -3), 4, 'Values are not strictly equal');
    })

    it('Test normal case with b = 0', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1, 0), -1, 'Values are not strictly equal');
    })

    it('Test normal case with a = 0', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, -1), 1, 'Values are not strictly equal');
    })

    it('Test case (a) float less than a.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 5), -3, 'Values are not strictly equal');
    })

    it('Test case (a) float greater than or equal to a.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 5), -2, 'Values are not strictly equal');
    })

    it('Test case (b) float less than b.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 5.2), -3, 'Values are not strictly equal');
    })

    it('Test case (b) float greater than or equal to b.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 5.7), -4, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float less than a.5, b.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.2, 5.3), -3, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float greater than or eual to a.5, b.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, 5.5), -3, 'Values are not strictly equal');
    })

    it('Test case a negative', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.7, 5.5), -9, 'Values are not strictly equal');
    })

    it('Test case b negative', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.7, -2.7), 6, 'Values are not strictly equal');
    })

    it('Test case both (a and b) same value and int', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 2), 0, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float and the return value is not the actual value', function() {
      assert.notStrictEqual(calculateNumber('SUBTRACT', 2.5, -2.5), 5, 'Values are strictly equal');
    })

    it('Test case both (a and b) float and the return value is not float', function() {
      assert.notStrictEqual(calculateNumber('SUBTRACT', 2.5, -2.7), 5.2, 'Values are strictly equal');
    })

    it('Test check if return value is "number"', function() {
      assert(typeof(calculateNumber('SUBTRACT', 2.5, 2.7)) === 'number', 'This should not fail');
    })
  })
  describe('Test dividing case', function() {
    it('Test normal case positive', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), -2, 'Values are not strictly equal');
    })

     it('Test normal case negative', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1, -3), 2, 'Values are not strictly equal');
    })

    it('Test normal case a negative', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1, 3), -4, 'Values are not strictly equal');
    })

    it('Test normal case b negative', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, -3), 4, 'Values are not strictly equal');
    })

    it('Test normal case with b = 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1, 0), -1, 'Values are not strictly equal');
    })

    it('Test normal case with a = 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0, -1), 1, 'Values are not strictly equal');
    })

    it('Test case (a) float less than a.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.2, 5), -3, 'Values are not strictly equal');
    })

    it('Test case (a) float greater than or equal to a.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.7, 5), -2, 'Values are not strictly equal');
    })

    it('Test case (b) float less than b.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 5.2), -3, 'Values are not strictly equal');
    })

    it('Test case (b) float greater than or equal to b.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 5.7), -4, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float less than a.5, b.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.2, 5.3), -3, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float greater than or eual to a.5, b.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.7, 5.5), -3, 'Values are not strictly equal');
    })

    it('Test case a negative', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -2.7, 5.5), -9, 'Values are not strictly equal');
    })

    it('Test case b negative', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.7, -2.7), 6, 'Values are not strictly equal');
    })

    it('Test case both (a and b) same value and int', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 2), 0, 'Values are not strictly equal');
    })

    it('Test case both (a and b) float and the return value is not the actual value', function() {
      assert.notStrictEqual(calculateNumber('DIVIDE', 2.5, -2.5), 5, 'Values are strictly equal');
    })

    it('Test case both (a and b) float and the return value is not float', function() {
      assert.notStrictEqual(calculateNumber('DIVIDE', 2.5, -2.7), 5.2, 'Values are strictly equal');
    })

    it('Test check if return value is "number"', function() {
      assert(typeof(calculateNumber('DIVIDE', 2.5, 2.7)) === 'number', 'This should not fail');
    })
  })
})
