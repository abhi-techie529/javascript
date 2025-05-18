 //********  primitve datatypes *********// 
 // 7 types :- String , Number , Boolean , null , undefined , Symbol, BigInt

 const score = 100
 const scoreValue = 100.4

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')    
 const anotherId = Symbol('123')

 console.log(id === anotherId);        // false ; both are not same 
 

 //********** Non-Primitive datatypes *************//

 // Arrays , Objects , Functions

 const heros = ["saltiman","nagraj","krrish"] //Arrays , in square braces

 let myObject = {
    name:"Abhimanyu" ,
    age: 22
 }                      //Object

 const myfunction = function(){
    console.log("Hello World");
    
 }                     //Function

 console.log(typeof myfunction);


 // typeof ; Arrays and object's datatype is "function" and datatype of function is "Object Function" inke datatype ko yhi bola jata h 

 