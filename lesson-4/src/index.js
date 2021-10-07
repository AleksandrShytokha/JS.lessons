let chooseTask = +prompt('Enter number of task, you want to check (1-3).');

switch (chooseTask) {
    case 1:
        const car = {
            manufacture: 'Toyota',
            model: 'Corola',
            distribution: '1979',
            speed: 60,

        }; 

        function showCarIformation() {
            document.write(`Manufacture: ${car.manufacture} <br\/>Model: ${car.model} <br \/>Year of issue: ${car.distribution} <br \/>Speed per hour: ${car.speed}`);
        }        

        showCarIformation();

        function timeOfRoad() {
            let distance = +prompt('Enter distance ypu need drive through.');
            let timeInRoad = 0;
            let timeWithOutRest = 0;
            let restTime = 0;

            timeWithOutRest = distance / car.speed;
            timeWithOutRest = parseInt(timeWithOutRest * 10) / 10;
            if (timeWithOutRest > 4) {
                restTime = parseInt(timeWithOutRest / 4);
            }
            timeInRoad = restTime + timeWithOutRest;
            document.write(`<br \/> Time in road (hours): ${timeInRoad}`);

            return timeInRoad;
        }

        timeOfRoad();
        break;
    case 2:
        const fraction = {
            numerator: 0,
            denominator: 0,
        }
        
        const firstFraction = Object.assign({}, fraction);
        const secondFraction = Object.assign({}, fraction);
        const result = Object.assign({}, fraction);

        firstFraction.numerator = +prompt('Enter numerator of 1-st fraction.');
        firstFraction.denominator = +prompt('Enter denominator of 1-st fraction.');

        secondFraction.numerator = +prompt('Enter numerator of 2-nd fraction.');
        secondFraction.denominator = +prompt('Enter denominator of 2-nd fraction.')

        let firstDenominator = firstFraction.denominator;
        let secondDenominator = secondFraction.denominator;
        let redResSumNumer = 0;
        let redResSumDenom = 0; 

        console.log(firstFraction);
        console.log(secondFraction);
        document.write(`<hr>First entered fraction: ${firstFraction.numerator}/${firstFraction.denominator}<br\/>`);
        document.write(`Second entered fraction: ${secondFraction.numerator}/${secondFraction.denominator}<br\/><hr> `);

        function gcd(n, m) {
            return m == 0 ? n : gcd(m, n % m);
        }

        function nok(n, m) {
            return n * m / gcd(n, m);
        }

        function multiplicationOfFraction() {

            if (firstDenominator !== 0 && secondDenominator !== 0) {
                result.numerator = firstFraction.numerator * secondFraction.numerator;
                result.denominator = firstFraction.denominator * secondFraction.denominator;
            } else {
                document.write('You entered null or something else for denominator.')
            }

            redResSumNumer = result.numerator;
            redResSumDenom = result.denominator; 

            console.log(`Multiplication = ${result.numerator}/${result.denominator}`);
            console.log(reductionOfFraction(redResSumNumer, redResSumDenom));
            document.write(`Multiplication of fractions: ${result.numerator}/${result.denominator} <br \/>`);
            document.write(`Reduction of result: ${reductionOfFraction(redResSumNumer, redResSumDenom)} <br \/><hr>`);
            return result;

        }

        function divisionOfFraction() {

            if (firstDenominator !== 0 && secondDenominator !== 0) {
                result.numerator = firstFraction.numerator * secondFraction.denominator;
                result.denominator = firstFraction.denominator * secondFraction.numerator;
            } else {
                document.write('You entered null or something else for denominator.')
            }

            redResSumNumer = result.numerator;
            redResSumDenom = result.denominator; 

            console.log(`Division = ${result.numerator}/${result.denominator}`);
            console.log(reductionOfFraction(redResSumNumer, redResSumDenom));
            document.write(`Division of fractions: ${result.numerator}/${result.denominator} <br \/>`);
            document.write(`Reduction of result: ${reductionOfFraction(redResSumNumer, redResSumDenom)} <br \/><hr>`);
            return result;

        }

        function sumOfFraction () {
            let NOK = 0;

            NOK = nok(firstFraction.denominator, secondFraction.denominator);

            let firstMultiplier = NOK / firstFraction.denominator;
            let secondMultiplier = NOK / secondFraction.denominator;
            
            if (firstDenominator === secondDenominator && (firstDenominator !== 0 && secondDenominator !== 0)) {

                result.numerator = firstFraction.numerator + secondFraction.numerator;
                result.denominator = firstFraction.denominator;

            } else if ((firstDenominator < secondDenominator && (firstDenominator !== 0 && secondDenominator !== 0)) || (firstDenominator > secondDenominator && (firstDenominator !== 0 && secondDenominator !== 0))) {

                result.numerator = (firstFraction.numerator * firstMultiplier) + (secondFraction.numerator * secondMultiplier);
                result.denominator = NOK;

            } else {
                document.write('You entered null or something else for denominator.')
            }

            redResSumNumer = result.numerator;
            redResSumDenom = result.denominator; 

            console.log(`Suma: ${result.numerator}/${result.denominator}`); 
            console.log(reductionOfFraction(redResSumNumer, redResSumDenom));
            document.write(`Summ of fractions: ${result.numerator}/${result.denominator} <br \/>`);
            document.write(`Reduction of result: ${reductionOfFraction(redResSumNumer, redResSumDenom)} <br \/><hr>`);
            return result;     
        }

        function subtractionOfFraction() {
            let NOK = 0;

            NOK = nok(firstFraction.denominator, secondFraction.denominator);

            let firstMultiplier = NOK / firstFraction.denominator;
            let secondMultiplier = NOK / secondFraction.denominator;
            
            if (firstDenominator === secondDenominator && (firstDenominator !== 0 && secondDenominator !== 0)) {

                result.numerator = firstFraction.numerator - secondFraction.numerator;
                result.denominator = firstFraction.denominator;

            } else if ((firstDenominator < secondDenominator && (firstDenominator !== 0 && secondDenominator !== 0)) || (firstDenominator > secondDenominator && (firstDenominator !== 0 && secondDenominator !== 0))) {

                result.numerator = (firstFraction.numerator * firstMultiplier) - (secondFraction.numerator * secondMultiplier);
                result.denominator = NOK;

            } else {
                document.write('You entered null or something else for denominator.')
            }

            redResSumNumer = result.numerator;
            redResSumDenom = result.denominator; 

            console.log(`Vichet: ${result.numerator}/${result.denominator}`);
            console.log(reductionOfFraction(redResSumNumer, redResSumDenom));
            document.write(`Subtraction of fractions: ${result.numerator}/${result.denominator} <br \/>`);
            document.write(`Reduction of result: ${reductionOfFraction(redResSumNumer, redResSumDenom)} <br \/> <hr>`);
            return result;

        }

        function reductionOfFraction (m, n) {

            let M = m;
            let N = n;

            for (let i = 2; i <= m; i++) {
                if (m % i === 0 && n % i === 0) {
                    M = m / i, N = n / i ;
                }
            }

            return [M, N].join('/');
        }

        sumOfFraction(); subtractionOfFraction(); multiplicationOfFraction(); divisionOfFraction();
        
        break;
    case 3:
        const time = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }

        const enteredTime = Object.assign({}, time);
        let addSeconds = 0;
        let addMinutes = 0;
        let addHours = 0;

        enteredTime.hours = +prompt('Enter count of hours.');
        enteredTime.minutes = +prompt('Enter count of minutes.');
        enteredTime.seconds = +prompt('Enter count of seconds.');

        function showTime() {
            let timeFormatted = [
                enteredTime.hours.toString().padStart(2, '0'),
                enteredTime.minutes.toString().padStart(2, '0'),
                enteredTime.seconds.toString().padStart(2, '0'),
            ].join(':');
            return timeFormatted;
        }

        document.write(`We get started with time - ${showTime()}.<br\/>`);
        console.log(showTime());

        function secondsChange() {
            addSeconds = +prompt('Enter count of second, you want to add (from 0 to 60).');
        
            if (addSeconds >= 1 && addSeconds <= 60) {
                enteredTime.seconds += addSeconds;
                if (enteredTime.seconds >= 60) {
                    enteredTime.seconds = enteredTime.seconds - 60;
                    enteredTime.minutes += 1;
                } else {
                    
                }
            } else {
                document.write(showTime());
            }
            return document.write(`After adding your ${addSeconds} seconds we got - ${showTime()}. <br\/>`);
        }

        function minutesChange() {
            addMinutes = +prompt(`Enter count of minutes, you want to add (from 0 to 60).`);

            if (addMinutes >= 1 && addMinutes <= 60) {
                enteredTime.minutes += addMinutes;
                if (enteredTime.minutes >= 60) {
                    enteredTime.minutes = enteredTime.minutes - 60;
                    enteredTime.hours += 1;
                } else {
                    
                }
            } else {
                document.write(showTime());
            }
            return document.write(`After adding your ${addMinutes} minutes we got - ${showTime()}. <br\/>`);
        }

        function hoursChange() {
            addHours = +prompt(`Enter count of hours, you want to add (from 0 to 24).`);

            if (addHours >= 1 && addHours <= 24) {
                enteredTime.hours += addHours;
                if (enteredTime.hours >= 24) {
                    enteredTime.hours = enteredTime.hours - 24;
                } else {
                    
                }
            } else {
                document.write(showTime());
            }
            return document.write(`After adding your ${addHours} hours we got - ${showTime()}. <br\/>`);
        }

        secondsChange(); minutesChange(); hoursChange();

        break;
    default:
        document.write(`Somthg go wrong, try again and try to enter numerals from 1 to 3.`)
        break;
}