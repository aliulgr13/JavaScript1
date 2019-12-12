"use strict";

// Write a function named tellFortune.
// It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
// Randomly select values from the arrays.
// Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
// Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random values that make sense
// Call the function 1 time, by passing the arrays as the argument.

//FIRST WAY
let numChild = [0, 1, 2, 3, 4];
let partnerNam = ["Scarlett", "Robin", "Curly", "Nesli", "Hattavay"];
let loc = ["England", "Netherlands", "USA", "Turkey", "Canada"];
let job = ["Coder", "President", "CafeOwner", "Tradesman", "Engineer"];

const tellFortune = function(numChildren, partnerNames, locations, jobs) {
  let rand = Math.floor(Math.random() * 5);
  jobs = jobs[rand];
  rand = Math.floor(Math.random() * 5);
  locations = locations[rand];
  rand = Math.floor(Math.random() * 5);
  partnerNames = partnerNames[rand];
  rand = Math.floor(Math.random() * 5);
  numChildren = numChildren[rand];
  return `You will be a ${jobs} in ${locations}, and married to ${partnerNames} with ${numChildren} kids.`;
};
console.log(tellFortune(numChild, partnerNam, loc, job));

//SECOND WAY we can find a solution with JavaScript Array prototype Constructor...
