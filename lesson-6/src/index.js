let chooseTask = +prompt("Enter number of task, you want to check (1-3).");

// Task #1 //

class circle {
    constructor(_radius) {
        this.radius = _radius;
    }

    get circleRadius() {
        return this.radius;
    }

    set circleRadius(newRadius) {
        this.radius = newRadius;
    }

    get circleDiametr() {
        return this.radius * 2;
    }

    circleLength() {
        let circleLenght = (2 * Math.PI * this.radius);
        document.write(`Lenght of circle is: ${circleLenght.toFixed(3)}.<br\/>`);
        return circleLenght;
    }

    circleSquare() {
        let circleSquare = (Math.pow(this.circleLength(), 2) / (Math.PI * 4));
        document.write(`Square of circle is: ${circleSquare.toFixed(3)}.`);
        return circleSquare;
    }

}

// Task #1 //
// Task #2 //

class marker {
    constructor(_color, _count) {
        this.color = _color;
        this.count = _count;
    }

    printText() {
        let userText = prompt('Enter some text, you want to print.');
        let stringCount = userText.length;
        let spaceCount = userText.split(' ').length-1;
        let needMarker = (stringCount - spaceCount) * 0.5;
        
        if (this.count >= needMarker) {
            document.write(`Count of marker at start: ${this.count}%.<br\/>`);
            this.count -= needMarker;
            document.write(`<p style = "color: ${this.color}; font-size: 30px;">${userText}<br\/></p>`);
            document.write(`Count of marker is left: ${this.count}%.<br\/>`);
        } 
        else if (this.count < needMarker) {
            document.write(`Count of marker at start: ${this.count}%.<br\/>`);
            let stringLength = this.count * 2 + spaceCount;
            this.count = 0;
            document.write(`<p style = "color: ${this.color}; font-size: 30px;">${userText.substr(0, stringLength)}</p>`);
            document.write(`Count of marker is left: ${this.count}%.<br\/>`);
        }
        return this.count;
    }
}

class loadMarker extends marker {
    constructor(_color, _count, _loadCount) {
        super(_color, _count);
        this.loadCount = _loadCount;
    }

    loadMarkerToPrint() {
        super.printText();
        this.loadCount =  +prompt('Enter count of marker you want to load.');
        document.write(`You loaded ${this.loadCount}% of marker.<br\/>`)
        this.count += this.loadCount;
        document.write(`The result count of marker is: ${this.count}%.`);
    }

}

// Task #2 //
// Task #3 //

class Employee {
    constructor (id, name, surname, department) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.department = department;
    }
}

class EmpTable {
    constructor() {
        this.Employees = [];
    }

    newEmployee(id, name, surname, department) {
        let emp = new Employee(id, name, surname, department);
        this.Employees.push(emp);
        return emp;
    }

    getHtml() {
        document.write(`<table style = "border: 2px solid black"><tr><th>Id</th><th>Name</th><th>Surname</th><th>Department</th></tr>`);
        this.Employees.forEach(element => {
            document.write(`<tr><td style = "border: 2px solid black">${element.id}</td><td style = "border: 2px solid black">${element.name}</td><td style = "border: 2px solid black">${element.surname}</td><td style = "border: 2px solid black">${element.department}</td></tr>`)
        });
        document.write(`</table>`);
    }
}

// Task #3 //

switch (chooseTask) {
    case 1:
        
        let startTry = new circle (5);
        document.write(`Basic radius for class.<br\/>Radius of circle is: ${startTry.circleRadius}.<br\/>`)
        document.write(`Diametr of circle is: ${startTry.circleDiametr}.<br\/>`);
        startTry.circleSquare();
        startTry.circleRadius = 6;
        document.write(`<hr>New radius for class.<br\/>Radius of circle is: ${startTry.circleRadius}.<br\/>`)
        document.write(`Diametr of circle is: ${startTry.circleDiametr}.<br\/>`);
        startTry.circleSquare();

        break;
    case 2:

        let secondTaskSecondClass = new loadMarker('GoldenRod', 5.5, 0);
        secondTaskSecondClass.loadMarkerToPrint();

        break;
    case 3:

        let startWork = new EmpTable();
        startWork.newEmployee('1', 'alex', 'alexon', 'IT(Front-End)');
        startWork.newEmployee('2', 'jack', 'jackson', 'Marketing');
        startWork.newEmployee('3', 'paul', 'mcCartney', 'Music');
        startWork.newEmployee('4', 'don', 'vincenzo', 'Mafia');
        startWork.getHtml();

        break;
    default:
        break;
}