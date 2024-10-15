const sum = require("./sum");
const multiply = require("./multiplication");
const subract = require("./subtraction");
const divide = require("./division");
let sumA = 6;
let sumB = 5;
let sumResult = sum(sumA,sumB);
console.log(sumResult);
let mulA = 7;
let mulB = 8;
const mulResult = multiply(mulA,mulB);
console.log(mulResult);
let subA = 9;
let subB = 7;
const subResult = subract(subA,subB);
console.log(subResult);
let divA = 8;
let divB = 4;
const divResult = divide(divA,divB);
console.log(divResult);



