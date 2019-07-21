function addSubtract(numOne, numTwo, numThree) {
    let result = subtract(sum(numOne, numTwo), numThree);
    console.log(result);

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
}

addSubtract(23, 6, 10);