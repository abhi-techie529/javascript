//******* Stack (Primitive) , Heap (Non-Primitive) **********/

let myName = "Abhimanyu"

let anotherName = myName
anotherName = "Chakarvyuah"


console.log(myName);
console.log(anotherName);

// in this we get a copy of data from the original data 

//********* Heap ************//

let userOne = {
    email: "user@gmail.com"
   
}
let userTwo =  userOne

userTwo.email = "abhimanyu@gmail.com"      //userTwo.email this is how we show object ex:- valu.email , value.upi , value.name

console.log(userOne.email); // output : abhimanyu@gmail.com
console.log(userTwo.email);  // output : abhimanyu@gmail.com

// from this we understand that , in Heap if we changed anything , actually we changed in the original value 

