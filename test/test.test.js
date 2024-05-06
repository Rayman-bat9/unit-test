const assert = require('assert');
const NumbersValidator = require('../src/NumbersValidator');

describe('NumbersValidator', () => {
    describe('isNumberEven', () => {
        it('should return true for even numbers', () => {
            const validator = new NumbersValidator();
            assert.strictEqual(validator.isNumberEven(2), true);
            assert.strictEqual(validator.isNumberEven(4), true);
            assert.strictEqual(validator.isNumberEven(0), true);
        });

        it('should return false for odd numbers', () => {
            const validator = new NumbersValidator();
            assert.strictEqual(validator.isNumberEven(1), false);
            assert.strictEqual(validator.isNumberEven(3), false);
            assert.strictEqual(validator.isNumberEven(5), false);
        });

        it('should throw an error for non-number inputs', () => {
            const validator = new NumbersValidator();
            assert.throws(() => validator.isNumberEven('a'), /^Error: \[a\] is not of type "Number" it is of type "string"$/);
        });
    });

    describe('getEvenNumbersFromArray', () => {
        it('should return an array of even numbers', () => {
            const validator = new NumbersValidator();
            const result = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5]);
            assert.deepStrictEqual(result, [2, 4]);
        });

        it('should throw an error if any element in the array is not a number', () => {
            const validator = new NumbersValidator();
            assert.throws(() => validator.getEvenNumbersFromArray([1, 2, 'a']), /^Error: \[1,2,a\] is not an array of "Numbers"$/);
        });
    });

    describe('isAllNumbers', () => {
        it('should return true if all elements in the array are numbers', () => {
            const validator = new NumbersValidator();
            const result = validator.isAllNumbers([1, 2, 3, 4, 5]);
            assert.strictEqual(result, true);
        });

        it('should return false if any element in the array is not a number', () => {
            const validator = new NumbersValidator();
            const result = validator.isAllNumbers([1, 2, 'a', 4, 5]);
            assert.strictEqual(result, false);
        });

        it('should throw an error for non-array inputs', () => {
            const validator = new NumbersValidator();
            assert.throws(() => validator.isAllNumbers('a'), /^Error: \[a\] is not an array$/);
        });
    });

    describe('isInteger', () => {
        it('should return true if the value is an integer', () => {
            const validator = new NumbersValidator();
            const result = validator.isInteger(10);
            assert.strictEqual(result, true);
        });

        it('should return false if the value is not an integer', () => {
            const validator = new NumbersValidator();
            const result = validator.isInteger(10.5);
            assert.strictEqual(result, false);
        });

        it('should throw an error for non-number inputs', () => {
            const validator = new NumbersValidator();
            assert.throws(() => validator.isInteger('a'), /^Error: \[a\] is not a number$/);
        });
    });
});