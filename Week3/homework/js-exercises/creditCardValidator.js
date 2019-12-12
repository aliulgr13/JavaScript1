"use strict";

const numbValidator = function(cardNumber) {
  let total = 0;
  // I made loop to find total because total should be greater 16
  for (let i = 0; i < ("" + cardNumber).length; i++) {
    total += parseInt(("" + cardNumber)[i]);
  }
  // I made counter loop here to learn if all the digits same or not.
  let counter = 0;
  for (let i = 0; i <= 15; i++) {
    if (("" + cardNumber)[0] === ("" + cardNumber)[i]) {
      counter++;
    }
  }
  // I use if statement to fulfill all the requirements.
  if (typeof cardNumber !== "number") {
    return `The following ${cardNumber} credit card numbers are invalid.`;
  } else if (!Number.isInteger(cardNumber)) {
    return `The following ${cardNumber} credit card numbers are invalid.`;
  } else if (counter === 16) {
    return `The following ${cardNumber} credit card numbers are invalid.`;
  } else if (`${cardNumber}`.length !== 16) {
    return `The following ${cardNumber} credit card numbers are invalid.`;
  } else if (("" + cardNumber)[15] % 2 !== 0) {
    return `The following ${cardNumber} credit card numbers are invalid.`;
  } else if (total <= 16) {
    return `The following ${cardNumber} credit card numbers are invalid.`;
  } else {
    return `The following ${cardNumber} credit card numbers are valid.`;
  }
};

console.log(numbValidator(1111111101111123));
