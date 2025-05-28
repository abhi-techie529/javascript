//  singleton

// object literals

 const mySym = Symbol("key1")

 const jsUser = {
    name: "Abhimanyu",
    "full name": "Abhimanyu Verma",
    [mySym]: "mykey1"  ,  // if we want to use a symbol as a key than here is the syntax :- [] using this to reperesent a symbol
     age: 22,
    location:"hisar" ,
    email: "abhimanyu@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["monday","saturday"]
 }
 //************ methods to access objects ***********//
//  console.log(jsUser.email);      // commonly used
//  console.log(jsUser["email"]);   // most popular method to access objects for special cases
//  console.log(jsUser["full name"]);
//  console.log(jsUser[mySym]);

  jsUser.email = "abhimanyuv1003@gmail.com"   // this is use to change the object value 
  jsUser.name = "ABHIMANYU" // another example
  
//   Object.freeze(jsUser)  // by using this we are able to freeze or lock the value of the object variable , after that if can want to make any changes in this , than no chnages will be happen because the object variable "jsUser" is locked

  jsUser.email = "abhi@gmail.com"  // no changes

//  console.log(jsUser);
  
 //******** function  ********//

 jsUser.greeting = function(){
   console.log("hello js user");
 }
 jsUser.greetingtwo = function(){
   console.log(`hello js user,${this.name}`);    // string interpolation
 }

  console.log(jsUser.greeting());
  console.log(jsUser.greetingtwo());
  