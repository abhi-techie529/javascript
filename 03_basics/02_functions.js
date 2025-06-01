//*************** Rest operator ************//

function calculateCartPrice(val1, val2 ,...num1){
    return num1
}                           // here this " ... " work as "Rest Operator"

// console.log(calculateCartPrice(200,300,500,2000)); // output :- [500,2000] because 200 , 300 are in val1 and in val2


const user = {
    username: "Abhimanyu" ,
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  
}

// handleObject(user)             //1st method

handleObject({
    username: "abhi" ,
    price: 499
})                         // 2nd method , we can also able to paas the object directly

//****************** in case of  Array *************//

const myNewArray = [ 200,300, 400 , 500]

function returnSecondValue(getArray){
    return getArray[1]                  // 2nd value in array
}

//  console.log(returnSecondValue(myNewArray));   // 1st method
 console.log(returnSecondValue([200,300,400,500])); // 2nd method
 
 