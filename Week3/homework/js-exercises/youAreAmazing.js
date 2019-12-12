"use strict";

// It takes 1 argument: your name
// Inside the function create an array with 10 strings. Each string should be a compliment, like "great", "awesome"
// Write logic that randomly selects a compliment
// Return a string: "You are [COMPLIMENT], [YOUR_NAME]!

let arrayOfCompliment = [
  "great",
  "awesome",
  "legendary",
  "spectacular",
  "sentimental",
  "ravishing",
  "cool",
  "winsome",
  "funny",
  "breathtaking"
];

const giveCompliment = function(yourName) {
  let element = Math.floor(Math.random() * arrayOfCompliment.length);
  return `You are ${arrayOfCompliment[element]}, ${yourName}!`;
};

console.log(giveCompliment("Noer"));
console.log(giveCompliment("Wilgert"));
console.log(giveCompliment("Ali"));
