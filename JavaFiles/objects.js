// const JsUser = {
//     name: "Garima Negi",
//     age: 20,
//     location: "Dehradun",
//     email: "garima@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.location)  


// const tinderUser = new Object()
const tinderUser ={}

// console.log(tinderUser);

tinderUser.id = "abc123"
tinderUser.name = "Garima Negi" 
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "garima@google.com",
    fullname: {
        userfullname: {
            firstname: "Garima",
            lastname: "Negi"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);


// for concatenation:
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)

 const obj3 = {...obj1, ...obj2}  //mostly used
// console.log(obj3);

const users = [
    {name: "Garima",
         age: 20},
    {name: "Rahul",
         age: 21},
    {name: "Amit",
         age: 22}
    ]

 users[1].age
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));


const course = {
    coursename: "javascript",
    price: 1000,
    courseInstructor: "Garima",
}
//course.courseInstructor

 const {courseInstructor: instructor}= course

// console.log(courseInstructor);
console.log(instructor);