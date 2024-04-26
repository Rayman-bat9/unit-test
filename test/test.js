const { describe } = require('mocha');

const NumbersValidator = require('../src/NumbersValidator');

describe('NumbersValidator', () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });

  describe('isNumberEven', () => {
    test('should return true for even numbers', () => {
      expect(numbersValidator.isNumberEven(2)).toBe(true);
      expect(numbersValidator.isNumberEven(0)).toBe(true);
      expect(numbersValidator.isNumberEven(-4)).toBe(true);
    });

    test('should return false for odd numbers', () => {
      expect(numbersValidator.isNumberEven(3)).toBe(false);
      expect(numbersValidator.isNumberEven(5)).toBe(false);
      expect(numbersValidator.isNumberEven(-7)).toBe(false);
    });

    test('should throw error for non-numeric input', () => {
      expect(() => {
        numbersValidator.isNumberEven('not a number');
      }).toThrowError(/is not of type "Number"/);
    });
  });

  describe('getEvenNumbersFromArray', () => {
    test('should return an array of even numbers', () => {
      expect(numbersValidator.getEvenNumbersFromArray([1, 2, 3, 4, 5])).toEqual([2, 4]);
      expect(numbersValidator.getEvenNumbersFromArray([0, -2, 6, -8])).toEqual([0, -2, 6, -8]);
    });

    test('should throw error for non-array input', () => {
      expect(() => {
        numbersValidator.getEvenNumbersFromArray('not an array');
      }).toThrowError(/is not an array/);
    });

    test('should throw error if array contains non-numeric values', () => {
      expect(() => {
        numbersValidator.getEvenNumbersFromArray([1, 'not a number', 3]);
      }).toThrowError(/is not an array of "Numbers"/);
    });
  });

  describe('isAllNumbers', () => {
    test('should return true if all elements are numbers', () => {
      expect(numbersValidator.isAllNumbers([1, 2, 3])).toBe(true);
      expect(numbersValidator.isAllNumbers([])).toBe(true);
    });

    test('should return false if array contains non-numeric values', () => {
      expect(numbersValidator.isAllNumbers([1, 'not a number', 3])).toBe(false);
      expect(numbersValidator.isAllNumbers(['a', 'b', 'c'])).toBe(false);
    });

    test('should throw error for non-array input', () => {
      expect(() => {
        numbersValidator.isAllNumbers('not an array');
      }).toThrowError(/is not an array/);
    });
  });

  describe('isInteger', () => {
    test('should return true for integer values', () => {
      expect(numbersValidator.isInteger(5)).toBe(true);
      expect(numbersValidator.isInteger(-10)).toBe(true);
      expect(numbersValidator.isInteger(0)).toBe(true);
    });

    test('should return false for non-integer values', () => {
      expect(numbersValidator.isInteger(3.14)).toBe(false);
      expect(numbersValidator.isInteger('not a number')).toBe(false);
    });

    test('should throw error for non-numeric input', () => {
      expect(() => {
        numbersValidator.isInteger('not a number');
      }).toThrowError(/is not a number/);
    });
  });
});
