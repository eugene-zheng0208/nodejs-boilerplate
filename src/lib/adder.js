// @flow

class Adder {
    /*:: firstNumber: number */

    constructor(firstNumber /*: number */) {
        this.firstNumber = firstNumber;
    }

    add(secondNumber /*: number */) /*: number */ {
        return this.firstNumber + secondNumber;
    }

    subtract(thirdNumber /*: number */) /*: number */ {
        return this.firstNumber - thirdNumber;
    }

    multiply(fourthNumber /*: number */) /*: number */ {
        return this.firstNumber * fourthNumber;
    }
}

module.exports = Adder;
