const score = 30;

const balance = new Number(30);
console.log(balance);


// variations
const value = 1000000;
console.log(value.toLocaleString('en-IN'));

// To String
const num1 = 2892;
console.log(num1.toString());

// To Fixed
const num2 = 2346;
console.log(num2.toFixed(2));


// ABS
const abs_ = Math.abs(-23);
console.log(abs_);

// Random
console.log((Math.random()*6) + 1);

// Randomnly getting numbers within range formula
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
