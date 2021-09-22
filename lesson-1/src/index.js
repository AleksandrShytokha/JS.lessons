let chooseTask = +prompt('Please, choose a task, you want to check (From 1 to 10).');
switch (chooseTask) {
    case 1:
        let age = prompt('What`s your age?');
        if (age > 0 && age <= 12) {
            document.write('You are child!')
        }
        else if (age > 12 && age < 18) {
            document.write('You are teenager!')
        }
        else if (age >= 18 && age <= 60) {
            document.write('You are adult!')
        }
        else if (age > 60) {
            document.write('You are Settra the Imperishable')
        }
        else {
            document.write('Don`t cheat!!')
        }
        break;
    case 2:
        let number = prompt('Please, input number from 0 to 9');
        switch (number) {
            case `0`:
                document.write('For 0 special symbol is " ) "')
                break;
            case `1`:
                document.write('For 1 special symbol is " ! "')
                break;
            case `2`:
                document.write('For 2 special symbol is " @ and " "')
                break;
            case `3`:
                document.write('For 3 special symbol is " # and № "')
                break;
            case `4`:
                document.write('For 4 special symbol is " $ and ; "')
                break;
            case `5`:
                document.write('For 5 special symbol is " % "')
                break;
            case `6`:
                document.write('For 6 special symbol is " ^ and : "')
                break;
            case `7`:
                document.write('For 7 special symbol is " & and ? "')
                break;
            case `8`:
                document.write('For 8 special symbol is " * "')
                break;
            case `9`:
                document.write('For 9 special symbol is " ( "')
                break;
            default:
                document.write('Don`t cheat, please enter number from 0 to 9!')
                break;
        }
        break;
    case 3:
        let cloneNumber = +prompt('Enter number from 100 to 999!');
        let number1 = parseInt(cloneNumber / 100);
        let number2 = parseInt(cloneNumber / 10) % 10;
        let number3 = cloneNumber % 10;
        if ((cloneNumber >= 100 && cloneNumber <= 999) && (number1 === number2 || number2 === number3 || number1 === number3))
            alert('Number matching!');
        else
            alert('No number matching!');
        break;
    case 4:
        let year = prompt('Enter year!');
        if (year % 4 == 0 || year % 100 == 0 && year % 400 != 0) {
            document.write('Leap year!');
        }
        else {
            document.write('Not a leap year!');
        }
        break;
    case 5:
        let b;
        let c;
        let d;
        let a = prompt('Enter number from 10000 to 99999')
        if (a > 9999 && a < 100000) {
            b = a / 10000;
            a = a % 10000;
            c = a / 1000;
            a = a % 1000;
            a = a % 100;
            d = a / 10;
            a = a % 10;
            if (b === a && c === d) {
                alert("This number is palindrom.");
            }
            else {
                alert("This number isn`t palindrom.");
            }
        }
        else {
            alert("Please, enter number from 10000 to 99999.");
        }
        break;
    case 6:
        let enterSumUSD = prompt('Enter your money value in USD!');
        let chooseCurrency = prompt('Choose your currency (1 or 2)! EUR - 1; UAH - 2.');
        switch (chooseCurrency) {
            case `1`:
                let valueEUR = enterSumUSD * 0.85;
                document.write('Your money in EUR - ' + valueEUR + ' EUR.');
                break;
            case `2`:
                let valueUAH = enterSumUSD * 26.8;
                document.write('Your money in UAH - ' + valueUAH + ' UAH.');
                break;
            default:
                document.write('Somthn go wrong, sorry, your money now our money :)');
                break;
        }
        break;
    case 7:
        let clientSum = prompt('Enter your total sum for payment!');
        if (clientSum > 0 && clientSum <= 199) {
            document.write('Your total price - ' + clientSum);
        }
        else if (clientSum >= 200 && clientSum <= 299) {
            let skidkaOne = 3;
            let middleValueOne = clientSum / 100 * skidkaOne;
            let totalPriceOne = clientSum - middleValueOne;
            document.write('Your total price - ' + totalPriceOne);
        }
        else if (clientSum >= 300 && clientSum <= 499) {
            let skidkaTwo = 5;
            let middleValueTwo = clientSum / 100 * skidkaTwo;
            let totalPriceTwo = clientSum - middleValueTwo;
            document.write('Your total price - ' + totalPriceTwo);
        }
        else if (clientSum >= 500) {
            let skidkaThree = 7;
            let middleValueThree = clientSum / 100 * skidkaThree;
            let totalPriceThree = clientSum - middleValueThree;
            document.write('Your total price - ' + totalPriceThree);
        }
        else {
            document.write('Something go wrong!');
        }
        break;
    case 8:
        document.write('Just in progress now!');
        break;
    case 9:
        let scoreCounter = 0;
        let firstQuestion = +prompt('How many teeth does a person have? Enter 1/2/3 => 1 - XVI, 2 - XXXII, 3 - XX');
        if (firstQuestion === 2){
            scoreCounter += 2;
        }
        let secondQuestion = +prompt('How many days in a leap year? Enter 1/2/3 => 1 - 364, 2 - 365, 3 - 366');
        if (secondQuestion === 3){
            scoreCounter += 2;
        }
        let thirdQuestion = +prompt('Saturn - which planet from the sun in a row? Enter 1/2/3 => 1 - first, 2 - the last, 3 - sixth');
        if (thirdQuestion === 3){
            scoreCounter += 2;
        };
        document.write('Your score is ' + scoreCounter + '/6.')
        break;
    case 10:
        document.write('Just in progress now!');
        break;
    default:
        document.write('Something go wrong!');
        break;
}