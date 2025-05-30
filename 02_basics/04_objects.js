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