// for(let index=0; index < 10; index++){
//     const element = index;
//     console.log(element);
// } 

// for(let i=1; i <= 10; i++){
//     // console.log(`Outer loop value: ${i}`);
//     for(let j = 1; j <= 10; j++){
        // console.log(`Inner loop value: ${j} and outer loop ${i}`); 
    //     console.log(i + ` * ` + j + ` = ` + i * j); //for table
    // }
    // }

//??????????????????????????????????????????????????????????????????????????????????????????????????????????????



const map= new Map()
map.set(`IN`, "India")
map.set(`USA`, "United States of America")
map.set(`FR`, "France")
 
for(const key in map){
    // console.log(key);
}

//foreach loop
const myCoding =[ 
    { name: "Garima Negi",
        age: 20,
    },
    { name: "Amit",
        age: 26,
    },
    { name: "Rahul",
        age: 25,
    }
]
 
myCoding.forEach ( (item)  => {
    // console.log(item.age);
});

//filter
const myNums = [1, ,2 , 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => {
//     return num > 4 // also write
// })

const newNums =[]

myNums.forEach((num) => {
    if (num > 4){
        newNums.push(num)
    }
})
 console.log( newNums); // [5, 6, 7, 8, 9,