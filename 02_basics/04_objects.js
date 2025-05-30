// singleton //

// const tinderUser = new Object()     //singleton object
const tinderUser = {}                  // non-singleton object

tinderUser.id = "123"
tinderUser.name = "Abhi"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

// ******** objects in another object ***********//

const regularUser = {
      email: "abhimanyu@gmail.com",
     fullname: {
             userFullName: {
                  firstname: "Abhimanyu",
                  lastname: "verma"
                }
            }
        }

// console.log(regularUser);                    // we can access the data easily at different different level
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);


//********* merging of objects  **********//

 const obj1 = {1:"a" , 2:"b"}
 const obj2 = {3:"a" , 4:"b"}
 const obj3 = {5:"a" , 6:"b"}

//  const obj4 = {obj1 , obj2,obj3}
// const obj4 = Object.assign({},obj1 , obj2 , obj3 ) // 1) .assign :- if we want to assign differnt objects ,here "{}" = target and "obj1 , obj2 , obj3" = source   . but this method is not generally used
const obj4 = {...obj1,...obj2,...obj3}
 console.log(obj4);
 
 //********* if data come from database ********//

 const users = [
    {
        id: 1,
        email: "abhi@gmail.com"
    },
    {
        id: 1,
        email: "abhi@gmail.com"
    },
    {
        id: 1,
        email: "abhi@gmail.com"
    }  
 ]

 users[1].email   // if we want to access 1st value in the object suppose its email 

 //******** if we want to access keys and values *******//

 console.log(Object.keys(tinderUser));   // used to access keys
 console.log(Object.values(tinderUser));  // used to access values
 console.log(Object.entries(tinderUser));  // used to access entries but not generally used

 //**** if we want to check that this vlaue exist in the program or not  ************//

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // hasOwnProperty
 console.log(tinderUser.hasOwnProperty('isLogged'));
 
 