const { describe } = require('mocha');
const { expect } = require('chai');
const calculateNumber = require('2-calcul_chai');

describe('test calculateNumber function', () => {
  describe('test adding case', () => {
    it('test normal case positive', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('test normal case negative', () => {
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });

    it('test normal case with 0', () => {
      expect(calculateNumber('SUM', -1, 0)).to.equal(-1);
    });

    it('test normal case with a positive, b negative', () => {
      expect(calculateNumber('SUM', 1, -5)).to.equal(-4);
    });

    it('test case (a) float less than a.5', () => {
      expect(calculateNumber('SUM', 2.2, 5)).to.equal(7);
    });

    it('test case (a) float greater than or equal to a.5', () => {
      expect(calculateNumber('SUM', 2.7, 5)).to.equal(8);
    });

    it('test case (b) float less than b.5', () => {
      expect(calculateNumber('SUM', 2, 5.2)).to.equal(7);
    });

    it('test case (b) float greater than or equal to b.5', () => {
      expect(calculateNumber('SUM', 2, 5.7)).to.equal(8);
    });

    it('test case both (a and b) float less than a.5, b.5', () => {
      expect(calculateNumber('SUM', 2.2, 5.3)).to.equal(7);
    });

    it('test case both (a and b) float greater than or equal to a.5, b.5', () => {
      expect(calculateNumber('SUM', 2.7, 5.5)).to.equal(9);
    });

    it('test case both (a and b) same value and float', () => {
      expect(calculateNumber('SUM', 2.7, 2.7)).to.equal(6);
    });

    it('test case both (a and b) same value and int', () => {
      expect(calculateNumber('SUM', 2, 2)).to.equal(4);
    });

    it('test case both (a and b) float and the return value is not the actual value', () => {
      expect(calculateNumber('SUM', 2.5, 2.5)).to.not.equal(5);
    });

    it('test case both (a and b) float and the return value is not float', () => {
      expect(calculateNumber('SUM', 2.5, 2.7)).to.not.equal(5.2);
    });

    it('test check if return value is "number"', () => {
      expect(calculateNumber('SUM', 2.5, 2.7)).to.be.a('number');
    });
  });
  describe('test subtracting case', () => {
    it('test normal case positive', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('test normal case negative', () => {
      expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    });

    it('test normal case a negative', () => {
      expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
    });

    it('test normal case b negative', () => {
      expect(calculateNumber('SUBTRACT', 1, -3)).to.equal(4);
    });

    it('test normal case with b = 0', () => {
      expect(calculateNumber('SUBTRACT', -1, 0)).to.equal(-1);
    });

    it('test normal case with a = 0', () => {
      expect(calculateNumber('SUBTRACT', 0, -1)).to.equal(1);
    });

    it('test case (a) float less than a.5', () => {
      expect(calculateNumber('SUBTRACT', 2.2, 5)).to.equal(-3);
    });

    it('test case (a) float greater than or equal to a.5', () => {
      expect(calculateNumber('SUBTRACT', 2.7, 5)).to.equal(-2);
    });

    it('test case (b) float less than b.5', () => {
      expect(calculateNumber('SUBTRACT', 2, 5.2)).to.equal(-3);
    });

    it('test case (b) float greater than or equal to b.5', () => {
      expect(calculateNumber('SUBTRACT', 2, 5.7)).to.equal(-4);
    });

    it('test case both (a and b) float less than a.5, b.5', () => {
      expect(calculateNumber('SUBTRACT', 2.2, 5.3)).to.equal(-3);
    });

    it('test case both (a and b) float greater than or equal to a.5, b.5', () => {
      expect(calculateNumber('SUBTRACT', 2.7, 5.5)).to.equal(-3);
    });

    it('test case a negative', () => {
      expect(calculateNumber('SUBTRACT', -2.7, 5.5)).to.equal(-9);
    });

    it('test case b negative', () => {
      expect(calculateNumber('SUBTRACT', 2.7, -2.7)).to.equal(6);
    });

    it('test case both (a and b) same value and int', () => {
      expect(calculateNumber('SUBTRACT', 2, 2)).to.equal(0);
    });

    it('test case both (a and b) float and the return value is not the actual value', () => {
      expect(calculateNumber('SUBTRACT', 2.5, -2.5)).to.not.equal(5);
    });

    it('test case both (a and b) float and the return value is not float', () => {
      expect(calculateNumber('SUBTRACT', 2.5, -2.7)).to.not.equal(5.2);
    });

    it('test check if return value is "number"', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 2.7)).to.be.a('number');
    });
  });
  describe('test dividing case', () => {
    it('test normal case positive', () => {
      expect(calculateNumber('DIVIDE', 25, 5)).to.equal(5);
    });

    it('test normal case negative', () => {
      expect(calculateNumber('DIVIDE', -25, -5)).to.equal(5);
    });

    it('test normal case a negative', () => {
      expect(calculateNumber('DIVIDE', -25, 5)).to.equal(-5);
    });

    it('test normal case b negative', () => {
      expect(calculateNumber('DIVIDE', 25, -5)).to.equal(-5);
    });

    it('test normal case with b = 0', () => {
      expect(calculateNumber('DIVIDE', 25, 0)).to.equal('Error');
    });

    it('test normal case with a = 0', () => {
      expect(calculateNumber('DIVIDE', 0, -1)).to.equal(-0);
    });

    it('test normal case with a = 0, b positive', () => {
      expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
    });

    it('test normal case with a = 0, b is 0 and less than 0.2', () => {
      expect(calculateNumber('DIVIDE', 1, 0.2)).to.equal('Error');
    });

    it('test normal case with a = 0, b is 0 and greater than 0.2', () => {
      expect(calculateNumber('DIVIDE', 1, 0.7)).to.equal(1);
    });

    it('test case (a) float less than a.5', () => {
      expect(calculateNumber('DIVIDE', 25.2, 5)).to.equal(5);
    });

    it('test case (a) float greater than or equal to a.5', () => {
      expect(calculateNumber('DIVIDE', 24.7, 5)).to.equal(5);
    });

    it('test case (b) float less than b.5', () => {
      expect(calculateNumber('DIVIDE', 25, 5.2)).to.equal(5);
    });

    it('test case (b) float greater than or equal to b.5', () => {
      expect(calculateNumber('DIVIDE', 25, 4.7)).to.equal(5);
    });

    it('test case both (a and b) float less than a.5, b.5', () => {
      expect(calculateNumber('DIVIDE', 25.2, 5.3)).to.equal(5);
    });

    it('test case both (a and b) float greater than or equal to a.5, b.5', () => {
      expect(calculateNumber('DIVIDE', 24.7, 4.5)).to.equal(5);
    });

    it('test case a negative', () => {
      expect(calculateNumber('DIVIDE', -24.7, 4.5)).to.equal(-5);
    });

    it('test case b negative', () => {
      expect(calculateNumber('DIVIDE', 24.7, -4.7)).to.equal(-5);
    });

    it('test case both (a and b) same value and int', () => {
      expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
    });

    it('test case both (a and b) float and the return value is not the actual value', () => {
      expect(calculateNumber('DIVIDE', 3.2, 3)).to.not.equal(1.0666666666666667);
    });

    it('test check if return value is "number"', () => {
      expect(calculateNumber('DIVIDE', 2.5, 2.7)).to.be.a('number');
    });
  });
});
