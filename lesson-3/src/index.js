let chooseTask = +prompt('Please, enter number of task, you want to check (1-10).');

switch (chooseTask) {
    case 1:
        let firstNumber = +prompt('Enter 1-st number.');
        let secondNumber = +prompt('Enter 2-nd number.');

        function twoNumbersCheck() {
            if (firstNumber < secondNumber) {
                return -1;
            } else if (firstNumber > secondNumber) {
                return 1;
            } else if (firstNumber === secondNumber) {
                return 0;
            } else {
                document.write('Babah, bah-bah, bydiiish');
            }
        }

        document.write(twoNumbersCheck());
        console.log(twoNumbersCheck());
        break;
    case 2:
        let factCheck = +prompt('Enter number to check his factorial.');
        let result = 1;

        function factorCheck() {
            for (let i = factCheck; i > 0; i--) {
                result *= i;
            }
            return result;
        }

        document.write(factorCheck());
        console.log(factorCheck());
        break;
    case 3:
        let firstValue = prompt('Enter rirst numeral.');
        let secondValue = prompt('Enter second numeral.');
        let thirdValue = prompt('Etner third numeral.');

        function createNumber() {
            let result = `${firstValue}${secondValue}${thirdValue}`;
            return result;
        }

        document.write(`Created number: ${createNumber()}`);
        console.log(createNumber());
        break;
    case 4:
        let a = +prompt('Enter width of rectangle.');
        let b = +prompt('Enter height of rectangle.');
        let S = 0;

        function squareOfRectangle() {
            if (a > 0 && b > 0) {
                S = a * b;
                document.write(`Square of rectangle is: ${S}`);
                return S;
            } else if (a > 0 && (b <= 0 || b === NaN)) {
                S = a * a;
                document.write(`Square of cheturehygolnik is: ${S}`);
                return S;
            }
            else {
                document.write('Tralalalalalala');
            }

        }

        console.log(squareOfRectangle(a, b));
        break;
    case 5:
        let perfectNumber = +prompt('Enter your number.');
        let divider = perfectNumber - 1;
        let sum = 0;

        function isPerfect() {
            for (let i = divider; perfectNumber > 0 && i > 0; i--) {
                if (perfectNumber % i === 0) {
                    sum += i;
                }
            }
            if (perfectNumber === sum) {
                alert(`Number: ${perfectNumber} is perfect.`)
            } else {
                alert(`Number: ${perfectNumber} is not perfect.`)
            }
            return perfectNumber;
        }

        isPerfect();
        break;
    case 6:
        let minValue = +prompt('Enter min number of range.');
        let maxValue = +prompt('Enter max number of range.');
        let n = 0;

        function isPerfect2() {
            let perfectNumber = n;
            let divider = perfectNumber - 1;
            let sum = 0;

            for (let i = divider; perfectNumber > 0 && i > 0; i--) {
                if (perfectNumber % i === 0) {
                    sum += i;
                }
            }
            if (perfectNumber === sum) {
                document.write(`Number: ${perfectNumber} is perfect. <br\/>`);
            } else {
                // document.write(`Number: ${perfectNumber} is not perfect.`); 
            }
            return perfectNumber;
        }

        function showPerfectNumbers() {
            for (let i = maxValue; i >= minValue; i--) {
                n = i;
                isPerfect2(n);
            }
            document.write(isPerfect2());
        }

        showPerfectNumbers();
        break;
    case 7:
        let hoursValue = +prompt('Enter count of hours.');
        let minutesValue = +prompt('Enter count of minutes.');
        let secondsValue = +prompt('Enter count of seconds.');

        function timeShowFormat() {
            let timeFormatted = [
                hoursValue.toString().padStart(2, '0'),
                minutesValue.toString().padStart(2, '0'),
                secondsValue.toString().padStart(2, '0'),
            ].join(':');
            document.write(`Correct time: ${timeFormatted}`);
        }

        timeShowFormat();
        break;
    case 8:
        let hours = +prompt('Enter count of hours.');
        let minutes = +prompt('Enter count of minutes.');
        let seconds = +prompt('Enter count of seconds.');

        function intoSeconds(hours, minutes, seconds) {
            let firstTransform = hours * 3600;
            let secondTransform = minutes * 60;
            let transformResult = firstTransform + secondTransform + seconds;
            document.write(`Count of seconds: ${transformResult} <br\/>`);
            return transformResult;
        }

        console.log(intoSeconds(hours, minutes, seconds));
        break;
    case 9:
        let enteredSeconds = +prompt('Enter count of seconds.');

        function intoHoursMinutesSeconds(enteredSeconds) {
            let newHours = Math.floor(enteredSeconds / 60 / 60);
            let newMinutes = Math.floor((enteredSeconds - (newHours * 3600)) / 60);
            let newSeconds = Math.floor((enteredSeconds - ((newHours * 3600) + (newMinutes * 60))));

            let timeFormatted = [
                newHours.toString().padStart(2, '0'),
                newMinutes.toString().padStart(2, '0'),
                newSeconds.toString().padStart(2, '0'),
            ].join(':');
            document.write(`Correct time: ${timeFormatted}`);
            return timeFormatted;
        }

        intoHoursMinutesSeconds(enteredSeconds);
        break;
    case 10:
        function intoSeconds2(hours, minutes, seconds) {
            let firstTransform = hours * 3600;
            let secondTransform = minutes * 60;
            let transformResult = firstTransform + secondTransform + seconds;
            return transformResult;
        }

        function intoHoursMinutesSeconds2(enteredSeconds) {
            let newHours = Math.floor(enteredSeconds / 60 / 60);
            let newMinutes = Math.floor((enteredSeconds - (newHours * 3600)) / 60);
            let newSeconds = Math.floor((enteredSeconds - ((newHours * 3600) + (newMinutes * 60))));

            let timeFormatted = [
                newHours.toString().padStart(2, '0'),
                newMinutes.toString().padStart(2, '0'),
                newSeconds.toString().padStart(2, '0'),
            ].join(':');
            return timeFormatted;
        }

        let firstHoursValue = +prompt('Enter count of hours for 1-st date.');
        let firstMinutesValue = +prompt('Enter count of minutes for 1-st date.');
        let firstSecondsValue = +prompt('Enter count of seconds for 1-st date.');
        let secondHoursValue = +prompt('Enter count of hours for 2-nd date.');
        let secondMinutesValue = +prompt('Enter count of minutes for 2-nd date.');
        let secondSecondsValue = +prompt('Enter count of seconds for 2-nd date.');
        let resultDifference = 0;

        function differenceOfTime() {
            let firstTimeValue = 0;
            let secondTimeValue = 0;

            firstTimeValue = intoSeconds2(firstHoursValue, firstMinutesValue, firstSecondsValue);
            secondTimeValue = intoSeconds2(secondHoursValue, secondMinutesValue, secondSecondsValue);
            resultDifference = firstTimeValue - secondTimeValue;
            resultDifference = intoHoursMinutesSeconds2(resultDifference);

            console.log(resultDifference);

            return resultDifference;
        }

        document.write(`Difference in time is: ${differenceOfTime()} <br\/>`);
        break;
    default:

        break;
}