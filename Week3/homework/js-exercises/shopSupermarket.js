"use strict";

// Write a function named addToShoppingCart.
// It takes in 1 argument: a grocery item (string)
// Add grocery item to array. If the amount of items is more than 3 remove the first one in the array
// Return a string: "You bought [LIST_OF_GROCERY_ITEMS]!"
// Create an array with 2 predefined strings: "bananas" and "milk"
// Call the function 3 times, each time with a different string as the argument.

// I added 3. item in the array to make function more accurate. For example when we add apple it deletes the 3.item.

const addToShoppingCart = function(groceryItem) {
  let groceryList = ["3.item", "bananas", "milk"];
  groceryList.push(groceryItem);
  if (groceryList.length > 3) {
    groceryList.shift();
    return `You bought ${groceryList}!`;
  }
};
console.log(addToShoppingCart("apple"));
console.log(addToShoppingCart("peach"));
console.log(addToShoppingCart("strawberry"));
