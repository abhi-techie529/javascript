//************ arrays ************//

const myArr = [0,1,2,3,4,5]
const myHeros = ["saktiman" , "Krrish" ,"Flying jatt"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);
console.log(myHeros[2]);


//*************** Arrays methods **************//

myArr.push(6)
myArr.push(7,8,9) // this method adds elements to the end of the array
myArr.pop() // this method removes the last element from the array
myArr.unshift(9) // this method adds an element to the beginning of the array
myArr.shift() // this method removes the first element from the array

console.log(myArr.includes(9)); // this method checks if an element is present in the array 
console.log(myArr.indexOf(2)); // this method returns the index of the element in the array


const newArr = myArr.join() // this method joins the elements of the array into a string
console.log(myArr);
console.log(newArr); // this will print the array as a string
console.log(typeof newArr); 

//********* slice , splice ************//

console.log("A",myArr);

const n1 = myArr.slice(1, 3) // this method returns a new array with the elements from index 1 to index 3 (not inclusive) ,1 included , 2 included, 3 not included [0,1,2]

console.log(n1);
console.log("B",myArr);

const n2 = myArr.splice(1, 3) // this method removes the elements from index 1 to index 3 (not inclusive) and returns them as a new array ,1 included , 2 included, 3 included [1,2,3]
console.log("C",myArr);
console.log(n2);

   //*********** For Interview ************//
// so the difference between slice and splice is that slice returns a new array without modifying the original array, while splice modifies the original array and returns the removed elements as a new array. In splice,the selected elements are removed from the original array and rest of the elements are printed. //

