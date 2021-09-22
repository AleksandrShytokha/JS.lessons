let chooseTask = prompt('Please, choose a task, you want to check (from 1 to 10).');
switch (chooseTask) {
    case `1`:
        let minNumberValue = +prompt('Enter min number!');
        let maxNumberValue = +prompt('Enter max number!');
        let sumOfNumbers = 0;
        for (let i = minNumberValue; i <= maxNumberValue; i++) {
            sumOfNumbers = sumOfNumbers + i;
        }
        document.write('Sum of your numbers are - ' + sumOfNumbers + '.');
        break;
    case `2`:
        let firstNumber = +prompt('Enter first number');
        let secondNumber = +prompt('Enter second number');
        let grandCommonDivisor = 0;
        for (let i = firstNumber; i > 0; i--) {
            if (firstNumber % i === 0 && secondNumber % i === 0) {
                if (grandCommonDivisor < i) {
                    grandCommonDivisor = i;
                }
            }
        }
        document.write('Greatest common divisor - ' + grandCommonDivisor + '.<br \/>');
        break;
    case `3`:
        let userNumber = +prompt('Enter your number');
        for (let i = userNumber; i > 0; i--) {
            if (userNumber % i === 0) {
                document.write('Divisor - ' + i + '.<br \/>');
            }
        }
        break;
    case `4`:
        let number = +prompt('Enter your number');
        let quantity = 0;
        for (let i = 1; number / i >= 1; i *= 10) {
            quantity++;
        }
        document.write('Count of symbols in number - ' + quantity + '.');
        break;
    case `5`:
        let userNumbersSet;
        let negativeNumbers = 0;
        let positiveNumbers = 0;
        let zeroNumbers = 0;
        for (let i = 0; i < 10; i++) {
            userNumbersSet = +prompt('Enter your number');
            if (userNumbersSet > 0) {
                positiveNumbers++;
            }
            else if (userNumbersSet < 0) {
                negativeNumbers++;
            }
            else if (userNumbersSet == 0) {
                zeroNumbers++;
            }
        }
        document.write('Statistics:<br \/> 1. Positive: ' + positiveNumbers + '<br \/> 2. Negative: ' + negativeNumbers + '<br \/> 3. Zero count: ' + zeroNumbers);
        break;
    case `6`:
        let userCalculator = +prompt('Do you want to play? Tap 1 (yes) or 2 (no).');
        for (let i = userCalculator; i === 1; i--) {
            let firstValue = +prompt('Enter first number');
            let secondValue = +prompt('Enter second number');
            let userOperation = +prompt('What you need? Multiply - 1, Divide - 2, Add - 3, Subtract - 4. ');
            let userResult;
            switch (userOperation) {
                case 1:
                    userResult = firstValue * secondValue;
                    document.write('Result - ' + userResult);
                    break;
                case 2:
                    userResult = firstValue / secondValue;
                    document.write('Result - ' + userResult);
                    break;
                case 3:
                    userResult = firstValue + secondValue;
                    document.write('Result - ' + userResult);
                    break;
                case 4:
                    userResult = firstValue - secondValue;
                    document.write('Result - ' + userResult);
                    break;
                default:
                    i = 2;
                    document.write('Smth go another way, sorry :(');
                    break;
            }
            userCalculator = +prompt('Continue? Tap 1 (yes) or 2 (no).');
            if (userCalculator == 1) {
                i = 1;
            } else if (userCalculator == 2) {
                i = 2;
            }
        }
        break;
    case `7`:
        let userStringNumbers = +prompt('Enter your number');
        document.write('This is the last task, that i must to finished, sorry :(')
        break;
    case `8`:
        let enterWeekDay = +prompt('Enter your start day of the week. 1 - Su. 2 - Mo. 3 - Tu. 4 - We. 5 - Th. 6 - Fr. 7 - Sa.');
        let userWeekDay = enterWeekDay;
        while (userWeekDay > 0 && userWeekDay < 8) {
            switch(userWeekDay){
                case 1:
                    userWeekDay = +prompt(`Today is Sunday. Continue? 2 - yes, 8 - no.`)
                break;
                case 2:
                    userWeekDay = +prompt(`Today is Monday. Continue? 3 - yes, 8 - no.`)
                break;
                case 3:
                    userWeekDay = +prompt(`Today is Tuesday. Continue? 4 - yes, 8 - no.`)
                break;
                case 4:
                    userWeekDay = +prompt(`Today is Wednesday. Continue? 5 - yes, 8 - no.`)
                break;
                case 5:
                    userWeekDay = +prompt(`Today is Thursday. Continue? 6 - yes, 8 - no.`)
                break;
                case 6:
                    userWeekDay = +prompt(`Today is Friday. Continue? 7 - yes, 8 - no.`)
                break;
                case 7:
                    userWeekDay = +prompt(`Today is Saturday. Continue? 1 - yes, 8 - no.`)
                break;
                default:
                    document.write('Sorry, but i don`t want to work like that!')
                break;
            }
        }
        break;
    case `9`:
        let cd = '<table cellpadding="6" cellspacing="3" border="1">\n';
        cd += '<tr>\n';
        for (let i = 1; i <= 10; i++)
            cd += '<td align="right"><font color="red">&nbsp;' + ((i == 1) ? '' : i) + '</font></td>\n';
        for (i = 2; i <= 9; i++) {
            cd += '<tr>\n';
            for (let j = 1; j <= 10; j++)
                cd += '<td align="right">' + ((j == 1) ? ('<font color="red">&nbsp;' + i + '</font>') : i * j) + '</td>\n';
            cd += '</tr>\n';
        }
        cd += '</table>';
        with (document) open(), write(cd), close();
        break;
    case `10`:
        let minValue = 0;
        let maxValue = 100;
        let N = maxValue / 2;

        let isGame = true;

        do {
            let answer = prompt(`Ваше число ${N}? s/b/yes`);

            switch (answer) {
                case 's':
                    maxValue = N - 1;
                    N = parseInt(minValue + ((maxValue - minValue) / 2));
                    break;
                case 'b':
                    minValue = N + 1;
                    N = parseInt(minValue + ((maxValue - minValue) / 2));
                    break;
                default:
                    isGame = false;

            }
        } while (isGame)

        console.log(`Your Number is: ${N}`);
        break;
    default:
        document.write('Sorry, i dont know what to do :(')
        break;
}