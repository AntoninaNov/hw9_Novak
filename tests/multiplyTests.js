const assert = require('chai').assert;
const { getFactorial, multiply } = require('/Users/antoninanovak/WebstormProjects/hw9_Novak/scripts/multiply.js');

describe('multiply', function() {
    // Test with mix of positive and negative integers
    it('should return -20 when called as multiply(-1)(5)(4)', function() {
        assert.equal(multiply(-1)(5)(4).done(), -20);
    });

    // Test with negative integers
    it('should return 12 when called as multiply(-3)(-4)', function() {
        assert.equal(multiply(-3)(-4).done(), 12);
    });

    // Test with zero and negative number
    it('should return 0 when called as multiply(0)(-5)', function() {
        assert.equal(multiply(0)(-5).done(), 0);
    });

    // Test with floats
    it('should return 2.5 when called as multiply(1.25)(2)', function() {
        assert.equal(multiply(1.25)(2).done(), 2.5);
    });

    // Test with a very large number
    it('should return 1e+12 when called as multiply(1e+6)(1e+6)', function() {
        assert.equal(multiply(1e+6)(1e+6).done(), 1e+12);
    });
});
