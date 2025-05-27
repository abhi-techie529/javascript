 const marvel_heros = ["Ironman","thor","spiderman"]
 const dc_heros = ["superman","batman","flash"]

//  marvel_heros.push(dc_heros) 
 //1. push :- by using this it can push the (dc_heros) array in the (marverl_heros) as a another element :- means it can print like , [0,1,2,3] here 0 = ironman ,1 = thor , 2 = spiderman , 3 = ["superman","batman","flash"]

//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);  //   
// this will return the first value in the third element means in the dc_heros = batman

//   const allheros  = marvel_heros.concat(dc_heros)  // 
  // 2. concat:- by using this dc_heros will be merge with marvel_heros

//   console.log(allheros);
  
const allnewhero = [...marvel_heros ,...dc_heros]
// 3. spread :- this is the best method to merge to elements ,
console.log(allnewhero);

const another_hero = [1,2,3,[4,5,6],7,[8,9,[4,5]]]

const real_hero = another_hero.flat(Infinity)
//4. flat :- by using this we can settle down and merge all the element in a single element , at infinity's place always use numbers means how much depth you want to go //

console.log(real_hero);


//************************* *//

console.log(Array.isArray("Abhmanyu"));  // it help us to check that the valur "Abhimanyu" is a array or not //
console.log(Array.from("Abhimanyu")); //
//  5. from :- by using this we easily convert the "Abhimanyu" into an Array //
console.log(Array.from({name: "Abhimanyu"})); 
// ********* interview *******//
// in this case of mentioning {} "object" , we always need to tell that , which value we want to convert into array ,for ex: we always need to mention that we want to convert keys into array or its value into array , if it is not able to convert thant it always return empty value .


//*******8 another case ***********//

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); 
//.6 of :- returns a new array from as set of elements // 

