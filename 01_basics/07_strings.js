const name = "Abhimanyu"
const repoCount = 50

console.log(`my name is ${name} and my repo Count is  ${repoCount}`);

const gameName = new String('Abhimanyu- AV')

console.log(gameName[0]);  // by using => gameName[0] <= we can find the 0th key same as we can easily find out the [1],[2] ,first,second key also

// we can also able to access the prototype
console.log(gameName.__proto__);
// but easiest way to access the prototyep is from "console in inspect"

//********* different type of prototype ********//
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));  // by using this we can find out the that at what number which character is placed
console.log(gameName.indexOf('i')); // by using this we can find out the at which number which character is placed


const newString = gameName.substring(0,4) // in this we need to add the range of number in between we want to find the character
console.log(newString);

const anotherString = gameName.slice(-11,4) // in this we can also able to add negative number , so it count the character form opposite side
console.log(anotherString);


 // =>   same as we can acces the different prototype 

//********* trim() *************//

const newStringOne = "     Abhimanyu    "
console.log(newStringOne);
console.log(newStringOne.trim());  // by using trim we can easily remove the unwanted space

//********* replace() ***********//
const url = "https://abhimanyu.com/abhimanyu%20verma"

console.log(url.replace('%20',"-"));   // by using this %20 is replace by " - "

console.log(url.includes('abhimanyu'));  // by using this we can easily find out that this word is exist in the url or not

console.log(gameName.split('-')); // it means that all the words in which '-' this is used , splits now ,we cam use it like different- different vlaues
