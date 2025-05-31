//******** Function **********//

function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("U");
    
}
// sayMyName()            // this syntax , help to exwcute the function simple syntax

//**************************************//


// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(4 ,5)   // output :- 9
// addTwoNumbers(4 ,"5")   // output :- 45 , its work as string
// addTwoNumbers(4 ,null)   // output :- 4 , 


//********************************************//

function addTwoNumbers(number1 , number2){
 
    //    let result = number1 + number2       // first way to write a code for return , this "result " we declare inside addTwoNumbers 
    //    return result
    //    console.log("Abhi");    // this is functions br default rule:- that after return no function will work
       
    return number1 + number2
}

const result = addTwoNumbers(4 ,5)    // this "result " we declare outside the  above {}function

console.log("Result:" , result );


//*********** New Function  ************//

function loginUserMessage(username = "sam"){
    if( username === undefined){
          console.log("please enter a username");
          return
          
    }
    return `${username} just logged in`
}
 
// console.log(loginUserMessage("Abhimanyu"));
console.log(loginUserMessage());      // in this situation if do not paas anything this will return "undefined" not "null" (interview question)


