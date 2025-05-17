//  let score = "33"
 let score = "33abc"
//  let score = true
//  let score = null
//  let score = undefined

//  console.log(typeof score);


 let valueInNumber = Number (score)

//  console.log(typeof valueInNumber);
//  console.log(valueInNumber);
 
 
 // "33" => 33
 // "33abc" => NaN (Not a Number)
 // true => 1 ; false => 0
 // null => 0
 // undefined => NaN

  let isLoggedIn = 1
//  let isLoggedIn = ""
//  let isLoggedIn = "Abhimanyu"

  let booleanIsLoggedIn = Boolean(isLoggedIn)
  // console.log(booleanIsLoggedIn);
  
  // 1 => true ; 0 => false
  // "" => false     if we use empty string
  // "Abhimanyu" => true

  let someNumber = 1

  let stringNumber = String(someNumber)
  // console.log(stringNumber);

  // console.log(typeof stringNumber);  //it tell us type of stringNumber
  
  // ********************** Operations **************************//

let value = 3
let negValue = - value

// console.log(negValue)

//************* These are some basic opeartions**********//
// console.log(2+2);        
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); power operation 
// console.log(2/2);
// console.log(2%2);

// ********* Adding of String ***********//
 let str1 = "Hello"
 let str2 = " Abhimanyu"
 
 let str3 = str1+str2
 console.log(str3);
 
 //************ Some other Operations conversions ***********//

  // console.log("1" + 2);  
  // console.log(1 + "2");
  // console.log("1" + "2");
  // console.log("1" + 2 + 2); //if strring "" first than other value also treat as string 
  // console.log(1 + 2 + "2"); // if string are in end than first value complete its conversion(1+2=3 +2 =>32)
  

  //*********** Boolean Conversions ****************//

  // console.log(true);   // it gives us "true" value
  // console.log(+true);  // it gives us (1) number
  // console.log(+"");  // it gives us (0) number
  

  //************** Prefix-Postfix Operators ************//
  
  let gameCounter = 100
  // gameCounter++;       //postfix incremental
   ++gameCounter          // Prefix incremental

  console.log(gameCounter);

  // link to study
  // https://tc39.es/ecma262/#sec-abstract-operations
  //read about postfix and prefix
  