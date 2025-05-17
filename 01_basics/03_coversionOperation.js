//  let score = "33"
 let score = "33abc"
//  let score = true
//  let score = null
//  let score = undefined

 console.log(typeof score);


 let valueInNumber = Number (score)

 console.log(typeof valueInNumber);
 console.log(valueInNumber);
 
 
 // "33" => 33
 // "33abc" => NaN (Not a Number)
 // true => 1 ; false => 0
 // null => 0
 // undefined => NaN

  let isLoggedIn = 1
//  let isLoggedIn = ""
//  let isLoggedIn = "Abhimanyu"

  let booleanIsLoggedIn = Boolean(isLoggedIn)
  console.log(booleanIsLoggedIn);
  
  // 1 => true ; 0 => false
  // "" => false     if we use empty string
  // "Abhimanyu" => true

  let someNumber = 1

  let stringNumber = String(someNumber)
  console.log(stringNumber);

  console.log(typeof stringNumber);  //it tell us type of stringNumber
  
  