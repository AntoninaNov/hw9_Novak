function multiply(firstNum) {
    let result = firstNum;

    function innerMultiply(nextNum) {
        result *= nextNum;
        return innerMultiply;
    }

    innerMultiply.done = function() {
        return result;
    };

    return innerMultiply;
}

module.exports = { multiply };
