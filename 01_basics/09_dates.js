 //************ Dates *************//

 let myDate = new Date()
 console.log(myDate);
 console.log(myDate.toString()); // it gives us :- Sat May 24 2025 11:04:45 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toDateString()); // it gives date and day :- Sat May 24 2025
 console.log(myDate.toISOString());  // it gives date and time :- 2025-05-24T11:04:45.072Z
 console.log(myDate.toLocaleDateString()); // it gives date in different format :- 5/24/2025
console.log(myDate.toLocaleString()); // it  gives date and time in different format :- 5/24/2025, 11:04:45 AM
console.log(myDate.toLocaleTimeString()); // it gives us time :- 11:06:33 AM
console.log(myDate.toTimeString()); // it gives us cordinated universal time :-11:07:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString()); // it gives us day, date , time:- Sat, 24 May 2025 11:08:10 GMT
 
 console.log(typeof myDate); // amswer :- Object
  
 // we can also create our own date 

 let myCreateDate = new Date(2025 , 4 , 24)
 let myCreateDateTime = new Date(2025 , 0 , 24, 5, 3)

 console.log(myCreateDate.toDateString()); // it  gives us :- Sat May 24 2025
 console.log(myCreateDateTime.toLocaleString()); // it gives us :- 1/24/2025, 5:03:00 AM

 // dfferent syntax which we use in India :- mm/dd/yy //
  
let fileDate = new Date ("01-01-2025")
console.log(fileDate.toLocaleString());

// time in milisecond //
 let myTimeStamp = Date.now()

 console.log(myTimeStamp); // it gives us time in milisecond :- 1748086043430
  //******** another method ********/
console.log(myCreateDate.getTime()); // it also gives us time in milisecond :- 1748044800000
    
 //********* time in second ***********//

 console.log(Date.now()/1000); // but it gives us time in decimal :- 1748086289.697 , so to solve this problem we wrap it =>

 console.log(Math.floor(Date.now()/1000));  // this time is in seconds :- 1748086369

 //********** for getting specific day , year , month ********//

 let newDate = new Date()
  console.log(newDate.getMonth()); // answer:- 4 , means = May
  console.log(newDate.getDay()); // answer :- 6 , means = 6th day , saturday

  // ******** toLocalString in detail *********//

const fewDate = new Date();

const dayName = fewDate.toLocaleString('default', { weekday: 'long' });

console.log(dayName); // Output: "Friday", "Saturday", etc.
