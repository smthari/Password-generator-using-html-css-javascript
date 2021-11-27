// Functions for generating random number lowercase uppercase letters , symbols

/* Math.random method genrate a random floating-point numbers
Math.floor() function returns the largest integer less than or equal to a given number.
For generating a random uppercase lowercase text random numbers symbols we use Charcode 
http://stevehardie.com/2009/09/character-code-list-char-code/ */

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// adding a all functions into a object called randomFunc
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  };
  