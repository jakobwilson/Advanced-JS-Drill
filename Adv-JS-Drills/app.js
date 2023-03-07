let fruits = ['Apples', 'Bananas', 'Grapes'];



function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    
    let leastFavFruit = fruits[1];
    function printLeastFav() {
        console.log(leastFavFruit);
    }
    
    printFavFruit()
    printLeastFav()
}

printFruits();

myFunc();
function myFunc() {
    console.log('Hello, Jakob');
}

let alertFunc = ('Lab Finished');

showAlert();
function showAlert() {
    alert(alertFunc);
}