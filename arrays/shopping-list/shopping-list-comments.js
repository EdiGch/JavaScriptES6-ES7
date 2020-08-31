const shoppingList = [ 'pasta', 'tomatoes', 'bread', 'banana', 'newspaper' ];

let count = shoppingList.length;
let lastElementList = shoppingList[count - 1];


console.log(`You have ${count} item in shopp list.`);
console.log('first element is: ' + shoppingList[0] + ' last element list is: ' + lastElementList );
shoppingList.forEach(function (element, index) {
    let showShoppingList = `${index}: ${element}`
    console.log(` Details list: ${showShoppingList}`);
});

// adding an element to an array
//shoppingList.pop();
shoppingList.push('strawberry cake');

//shoppingList.shift();
//shoppingList.unshift('chocolate');

//shoppingList.splice(1, 0, 'Tea. The second element.');
shoppingList[1] = 'Tea. The second element.';

console.log(shoppingList);