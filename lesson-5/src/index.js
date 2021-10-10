let chooseTask = +prompt("enter number of task, you want to check (from 1 to 4).");

switch (chooseTask) {
    case 1:
        let shoppingList = [
            {
                productName: 'Apples',
                quantity: 20,
                bought: 'yes',
            },
            {
                productName: 'Chocolate',
                quantity: 5,
                bought: 'no',
            },
            {
                productName: 'Coca-cola',
                quantity: 2,
                bought: 'yes',
            },
            {
                productName: 'Corona Extra',
                quantity: 10,
                bought: 'no',
            },
            {
                productName: 'Crisps',
                quantity: 4,
                bought: 'no',
            },
        ];

        function showShoppingList() {

            shoppingList.sort(function (a, b) {
                if (a.bought > b.bought) {
                    return 1;
                }
                if (a.bought < b.bought) {
                    return -1;
                }
                return 0;
            });

            for (let i = 0; i <= 5; i++) {
                document.write(`<hr> Product name: ${shoppingList[i].productName} <br\/> Product quantity: ${shoppingList[i].quantity} <br\/> Bought: ${shoppingList[i].bought} <hr>`);

            }

        }

        function addNewProduct() {
            const newProduct = {
                productName: '',
                quantity: 0,
                bought: 'no',
            }

            newProduct.productName = prompt('Enter name of a new product.');
            newProduct.quantity = +prompt('Enter quantity of a new product.');

            const currentProduct = shoppingList.find(product => {
                return product.productName === newProduct.productName;
            });
            if (currentProduct !== undefined) {
                currentProduct.quantity += newProduct.quantity;
            } else {
                shoppingList.push(newProduct);
            }
        }

        function buyProduct() {

            let productBuyName = prompt('Enter product name, you want to buy.');

            const index = shoppingList.findIndex(item => item.productName === productBuyName);
            if (shoppingList[index].bought === 'no') {
                shoppingList[index].bought = 'yes';
            }
        }

        addNewProduct();
        buyProduct();
        showShoppingList();

        break;
    case 2:
        let shoppingReceipt = [
            {
                name: 'Apples',
                quantity: 10,
                price: 2.5,
            },
            {
                name: 'Beer',
                quantity: 6,
                price: 25,
            },
            {
                name: 'Potatoes',
                quantity: 3,
                price: 9,
            },
            {
                name: 'Meat',
                quantity: 2,
                price: 100,
            },
            {
                name: 'Smetana',
                quantity: 3,
                price: 20,
            },
        ];

        function showReceipt() {
            document.write(`<h1>Shopping recceipt contains of ${shoppingReceipt.length} items:</h1><hr>`);
            for (let i = 0; i <= shoppingReceipt.length; i++) {
                document.write(`<p>${i + 1}. Product name: ${shoppingReceipt[i].name} <br\/> Product quantity: ${shoppingReceipt[i].quantity} <br\/> Price for one item: ${shoppingReceipt[i].price} <br\/> Cost of goods: ${shoppingReceipt[i].quantity * shoppingReceipt[i].price}</p><hr>`);
            }
        }


        function allCostGet() {

            let elementCost = 0;
            let allCost = 0;

            shoppingReceipt.forEach(Element => {
                elementCost = Element.quantity * Element.price;
                allCost += elementCost;
                return allCost;
            });
            document.write(`Total price of all items in receipt is: ${allCost}.<hr>`);
            return allCost;
        }

        function theMostExpensiveItem() {

            let mostExpensive = {};
            let maxPrice = 0;

            shoppingReceipt.forEach(Item => {
                totalPrice = Item.quantity * Item.price;
                if (maxPrice < totalPrice) {
                    maxPrice = totalPrice;
                    mostExpensive = Object.assign({}, Item);
                } else {
                    return maxPrice;
                }
                return mostExpensive;
            });
            document.write(`The most expensive item of receipt is ${mostExpensive.name}. <br\/> Quantity: ${mostExpensive.quantity}. <br\/> Price for one item: ${mostExpensive.price}. <br\/> Total cost: ${mostExpensive.quantity * mostExpensive.price}.<hr>`)
            return mostExpensive;
        }

        function averageCost() {
            const average = allCostGet();
            theMostExpensiveItem();
            averagePrice = average / shoppingReceipt.length;
            document.write(`Avarage cost of item in receipt is: ${averagePrice}.<hr>`);

        }

        document.write(`<div>`);
        averageCost();
        showReceipt();
        document.write(`</div>`);

        break;
    case 3:
        const cssStyles = [
            {
                name: 'margin-left',
                value: '10%',
            },
            {
                name: 'width',
                value: '600px',
            },
            {
                name: 'color',
                value: 'GoldenRod',
            },
            {
                name: 'font-size',
                value: '30px',
            },
            {
                name: 'font-family',
                value: 'sans-serif',
            },
            {
                name: 'text-align',
                value: 'center',
            },
            {
                name: 'text-decoration',
                value: 'underline',
            },
            {
                name: 'text-transform',
                value: 'uppercase',
            },
        ];

        let userText = prompt("Enter some text (large amount of text :) ).");

        function cssStylesPick(text, styles) {
            const stylesToString = cssStyles.map(Element => {
                return `${Element.name}: ${Element.value}`;
            });

            document.write(`<p style = "${stylesToString.join(';')}">
            ${userText}
            </p>`)
        }

        cssStylesPick(userText, cssStyles);

        break;
    case 4:
        const classRooms = [
            {
                name: 'Audi',
                seats: 15,
                faculty: 'Biology',
            },
            {
                name: 'BMW',
                seats: 10,
                faculty: 'Chemistry',
            },
            {
                name: 'Nissan',
                seats: 13,
                faculty: 'Math',
            },
            {
                name: 'Lanos',
                seats: 18,
                faculty: 'Biology',
            },
            {
                name: 'Peugeot',
                seats: 20,
                faculty: 'Chemistry',
            },
        ];

        const group = {
            name: '',
            students: 0,
            faculty: '',
        };

        function showAllAudiences() {
            for (let i = 0; i <= classRooms.length; i++) {
                document.write(`<p>${i + 1}. Audience name: ${classRooms[i].name} <br\/> Number of seats: ${classRooms[i].seats} <br\/> Faculty: ${classRooms[i].faculty} <br\/></p><hr>`);
            }
        }

        function showFacultyAudiences(faculty) {
            const userFacultyAudience = prompt('Enter your faculty (Math, Biology, Chemistry.).');
        
            document.write(`Audience(s) for ${userFacultyAudience} faculty.<hr>`)
            classRooms.forEach(element => {
                if (element.faculty === userFacultyAudience) {
                    document.write(`<p>Audience name: ${element.name} <br\/> Number of seats: ${element.seats} <br\/> Faculty: ${element.faculty} <br\/></p><hr>`);
                }
                return element;
            });
        }

        function showAudiencesForGroup() {
            group.name= prompt('Enter name of your group.');
            group.students = +prompt('Enter count of students of your group.');
            group.faculty = prompt('Enter faculty of your group.');

            document.write('You can use next audience(s):<hr>')
            classRooms.forEach(element => {
                if (element.seats >= group.students && element.faculty === group.faculty) {
                    document.write(`<p>Audience name: ${element.name} <br\/> Number of seats: ${element.seats} <br\/> Faculty: ${element.faculty} <br\/></p><hr>`);
                }  
                return element;
            });
        }

        function showAudienceSeats() {

            classRooms.sort(function (a, b) {
                if (a.seats < b.seats) {
                    return 1;
                }
                if (a.seats > b.seats) {
                    return -1;
                }
                return 0;
            });

            for (let i = 0; i <= classRooms.length; i++) {
                document.write(`<hr> Audience name: ${classRooms[i].name} <br\/> Count of seats: ${classRooms[i].seats} <br\/> Faculty: ${classRooms[i].faculty} <hr>`);
            }

        }

        function showAudienceOfName() {

            classRooms.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });

            for (let i = 0; i <= 5; i++) {
                document.write(`<hr> Audience name: ${classRooms[i].name} <br\/> Count of seats: ${classRooms[i].seats} <br\/> Faculty: ${classRooms[i].faculty} <hr>`);
            }

        }

        showFacultyAudiences();
        showAudiencesForGroup();
        showAudienceSeats();
        showAudienceOfName();
        showAllAudiences();

        break;
    default:

        break;
}