// function sayMyName(){
//     console.log("G");
//     console.log("A");
//     console.log("R");
//     console.log("I");
//     console.log("M");
//     console.log("A");
// }

// sayMyName()

// function addTwoNumbers (num1, num2) {
//     console.log(num1 + num2);}

//     addTwoNumbers(3,6)

 function addTwoNumbers (num1, num2) {
  return num1 + num2;
 }
  const result = addTwoNumbers(3, 5)
//  console.log("Result: ", result ); 




function loginUserMessage(username){
    // if(!username){
    //     console.log("pleaae enter a valid username");
    //     return
    // }
    return `${username} just logged in`
}
//  console.log(loginUserMessage("Garima Negi"))
// console.log(loginUserMessage())



function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,4000,600,789))


