function getFactorial(num) {
    num = parseInt(num, 10);
    if (isNaN(num) || num < 0) return 'not a number';
    if (num === 0) return 1;
    return num * getFactorial(num - 1);
}

module.exports = { getFactorial };
