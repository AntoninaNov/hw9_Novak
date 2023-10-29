const assert = require('chai').assert;
const { getFactorial } = require('/Users/antoninanovak/WebstormProjects/hw9_Novak/scripts/factorial.js');

describe('getFactorial', function() {
    // Test with positive integer
    it('should return 120 when input is 5', function() {
        assert.equal(getFactorial(5), 120);
    });

    // Test with positive integer string
    it('should return 120 when input is "5"', function() {
        assert.equal(getFactorial('5'), 120);
    });

    // Test with invalid string
    it('should return "not a number" when input is "blabla"', function() {
        assert.equal(getFactorial('blabla'), 'not a number');
    });

    // Test with 0
    it('should return 1 when input is 0', function() {
        assert.equal(getFactorial(0), 1);
    });

    // Test with negative number
    it('should return "not a number" when input is -5', function() {
        assert.equal(getFactorial(-5), 'not a number');
    });
});