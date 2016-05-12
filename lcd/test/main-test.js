describe('lcd-digits', function () {
    var inputs;

    beforeEach(function () {
        inputs = '910'
    });
    it('should print correct text', function () {

        spyOn(console, 'log');

        printResult(inputs);

        var expectText = '\n._....._.\n'
            + '|_|..||.|\n'
            + '..|..||_|';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('numbersSplit', function () {
    var numbers;

    beforeEach(function () {
        numbers = '910'
    });
    it('return correct charNumbers', function () {
        var newCharNumbers = numbersSplit(numbers);
        var charNumbers = ['9', '1', '0'];

        expect(newCharNumbers).toEqual(charNumbers);
    });
});

describe('getNumberDigits', function () {
    var charNumbers;

    beforeEach(function () {
        charNumbers = ['9', '1', '0']
    });
    it('return correct numberDigits', function () {
        var newNumberDigits = getNumberDigits(charNumbers);
        var numberDigits = [
            {
                values: {
                    firstLine: '._.',
                    secondLine: '|_|',
                    thirdLine: '..|'
                }
            },
            {
                values: {
                    firstLine: '...',
                    secondLine: '..|',
                    thirdLine: '..|'
                }
            },
            {
                values: {
                    firstLine: '._.',
                    secondLine: '|.|',
                    thirdLine: '|_|'
                }
            }];

        expect(newNumberDigits).toEqual(numberDigits);
    });
});