"use strict";

// Write a function named calculateDogAge.
// It takes 1 argument: your puppy's age (number).
// Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
// Return a string: "Your doggie is [CALCULATED_VALUE] years old in dog years!"
// Call the function three times with different sets of values.

const calculateDogAge = function(puppyAge) {
  let calcVal = puppyAge * 7;
  return `Your doggie is ${calcVal} years old in dog years!`;
};
console.log(calculateDogAge(5));
console.log(calculateDogAge(7));
console.log(calculateDogAge(2));
