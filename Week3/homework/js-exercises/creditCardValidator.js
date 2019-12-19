"use strict";

const numbValidator = function(cardNumber) {
  let total = 0;
  const cardNumberStr = cardNumber.toString();
  // I made loop to find total because total should be greater 16
  for (let i = 0; i < cardNumberStr.length; i++) {
    total += Number.parseInt(cardNumberStr[i], 10);
  }
  // I made counter loop here to learn if all the digits same or not.
  let counter = 0;
  for (let i = 0; i < cardNumberStr.length; i++) {
    if (cardNumberStr[0] === cardNumberStr[i]) {
      counter++;
    }
  }
  // I use if statement to fulfill all the requirements.
  if (
    counter === 16 ||
    cardNumberStr.length !== 16 ||
    cardNumberStr[15] % 2 !== 0 ||
    Array.from(cardNumberStr).some(digit => isNaN(digit)) ||
    total <= 16
  ) {
    return `The following ${cardNumber} credit card numbers are invalid.`;
  } else {
    return `The following ${cardNumber} credit card numbers are valid.`;
  }
};

console.log(numbValidator(1234567897894552));
