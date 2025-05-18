//*********** Basic Comparison datatypes *************//

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 >= 1);


//************* Other Comparisons **************//

// console.log("2" > 1);
// console.log("02" > 1);

//*************** In case of null *************//

console.log( null > 0);    //false
console.log( null == 0);   // false
console.log( null >= 0);   //true

// The reason is that an equality check == and comparison > , < , >= , <= work differently
// Comparisons convert null to a number ,treating is as 0.That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// but mostly we avoid these type of conversions like :- null , undefined and use only clean code

// === "strictly equal"
console.log("2" === 2); // false because "2" = string and 2 = number


