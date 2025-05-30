// destructuring

const course = {
    courseName: "js in hindi" ,
    price: "1999" ,
    courseinstructor: "Sir"
}

// course.courseName    // we dont use it all the time (lenghty method)

//********* desturcture the object  ************//


// const {courseinstructor} = course  // in "{}" we write  the value which we want to extract from the course
// console.log(courseinstructor);
const {courseinstructor: instructor} = course   // here courseinstructor are destructure as "instructor" , now we do not need to write "courseinstructor" if want to call it , we just need to write "instructor" // this is called how we destructure the object
console.log(instructor);

//******** API **********//

// API in object  //
{
    "name": "Abhimanyu",              // all are in json sturutue 
    "coursename": "js in hindi",
    "price":"free"
}

// API in array  //

[
    {},
    {},
    {}
]