"use strict";

// Write a function called calculateTotalPrice
// It takes 1 argument: an object that contains properties that only contain number values
// Add all the number values together
// Return a number: the total price of all items
// Create an object named cartForParty with 5 properties. Each property should be a grocery item (like beers or chips) and hold a number value (like 1.75 or 0.99)
// Call the function 1 time, giving it the object cartForParty as an argument

const cartForParty = { beer: 1.75, chips: 1.5, peanut: 2, cheese: 3, coke: 1 };

const calculateTotalPrice = function(obj) {
  let total = 0;

  for (let item in obj) {
    total = total + obj[item];
  }
  return total;
};
console.log(calculateTotalPrice(cartForParty));
