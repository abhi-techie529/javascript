//***************** Numbers *****************//
const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));  // it will return = 100.00
// console.log(typeof balance);


const otherNumber = 123.8989
// console.log(otherNumber.toPrecision(3));


const hundereds = 10000000
// console.log(hundereds.toLocaleString('en-IN'));

//******************** Maths ***************//

console.log(Math);
console.log(Math.abs(-4)); // Absolute value:- convert negative value into positive
console.log(Math.round(4.6)); // round of :- it round of the number
console.log(Math.ceil(4.1));  // ceil :- it convert the number into highest number , even if it just little more than a specific number(ex:- 4.1,4.2) it convert into 5
console.log(Math.floor(4.9));  // floor :- it convert the number into loweset number , evem if the number is like (ex:- 4.9,4,8) it convert into 4

console.log(Math.sqrt(25)); // square root of 25 = 5

console.log(Math.random()); // random :- its gives value always between 0 and 1 , and always different

console.log(Math.random()*10 + 1); // by multiply by 10 it shift left side , by adding 1 , it coinfirm that minimum value can not be 0 , it always be min value 1 , but it can create problem at time of bodmass etc. so to avoid this problem we can wrap this in braces()

console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1)); // by using floor it can give a value without decimal

const min = 10
const max = 20

//Formula
// (Math.random()*(max - min + 1))

console.log(Math.floor((Math.random()*(max - min + 1)) + min)); 
// here we add min in the formula again which tell us that we want that out min vlaue (min = 10) atleast and no matter how high


