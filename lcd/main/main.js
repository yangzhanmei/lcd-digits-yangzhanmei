function printResult(numbers) {
    var charNumbers = numbersSplit(numbers);
    var numberDigits = getNumberDigits(charNumbers);
    var result = getResult(numberDigits);

    console.log(result);
}

function numbersSplit(numbers) {
    var charNumbers = numbers.split('');

    return charNumbers;
}

function getNumberDigits(charNumbers) {
    var digits = buildDigits();
    var numberDigits = [];

    charNumbers.forEach(function (number) {
        for (var i = 0; i < digits.length; i++) {
            if (parseInt(number) === digits[i].key) {
                numberDigits.push({values: digits[i].values});
            }
        }
    });

    return numberDigits;
}

function getResult(numberDigits) {
    var first = '';
    var second = '';
    var third = '';
    var resultString = '';

    numberDigits.forEach(function (key) {
        first += key.values.firstLine;
        second += key.values.secondLine;
        third += key.values.thirdLine;
    });
    resultString += first + '\n' + second + '\n' + third;

    return '\n' + resultString;
}

function buildDigits() {

    return [
        {key: 0, values: {firstLine: '._.', secondLine: '|.|', thirdLine: '|_|'}},
        {key: 1, values: {firstLine: '...', secondLine: '..|', thirdLine: '..|'}},
        {key: 2, values: {firstLine: '._.', secondLine: '._|', thirdLine: '|_.'}},
        {key: 3, values: {firstLine: '._.', secondLine: '._|', thirdLine: '._|'}},
        {key: 4, values: {firstLine: '...', secondLine: '|_|', thirdLine: '..|'}},
        {key: 5, values: {firstLine: '._.', secondLine: '|_.', thirdLine: '._|'}},
        {key: 6, values: {firstLine: '._.', secondLine: '|_.', thirdLine: '|_|'}},
        {key: 7, values: {firstLine: '._.', secondLine: '..|', thirdLine: '..|'}},
        {key: 8, values: {firstLine: '._.', secondLine: '|_|', thirdLine: '|_|'}},
        {key: 9, values: {firstLine: '._.', secondLine: '|_|', thirdLine: '..|'}}
    ];
}