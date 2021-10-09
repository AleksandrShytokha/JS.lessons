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

            let i = 0;
            for (i; i <= 5; i++) {
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

            for (let i = 0; i <= shoppingList.length; i++) {
                
                    for (shoppingList[i].productName in shoppingList[i]) {
                        if (shoppingList[i].productName === newProduct.productName) {
                            shoppingList[i].quantity += newProduct.quantity;
                        } else {
                            shoppingList.push(newProduct);
                        }
                    }
                
            }

            // shoppingList.push(newProduct);
        }

        addNewProduct(); 
        showShoppingList();

        function buyProduct(name) {

            let productName = prompt('Enter product name, you want to buy.');

            


        }


        break;
    case 2:

        break;
    case 3:

        break;
    case 4:

        break;
    default:

        break;
}