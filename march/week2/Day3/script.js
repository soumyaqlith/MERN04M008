// forEach()

// syntax  arr.forEach((v,i)=>{})

let arr = [1, 7, 2, 3, 2, 4, 5, 6, -8];
arr.forEach((v, i) => {
    console.log(v)
})


// map function
// let updateArr = arr.map((v, i) => {
//     return v + 2;
// })

let updateArr = arr.map(v => v + 2)

console.log(updateArr)
console.log(arr)

// filter function
// let filterArr = arr.filter((v, i) => {
//     return v % 2 === 0
// })
let filterArr = arr.filter(v => v % 2 === 0)
console.log(filterArr);



// let sum=0;

// for(let v of arr){
//     sum=sum+v;
// }
// console.log(sum)

// reduce
// arr.reduce((accu,cuur)=>{return },0)

let add = arr.reduce((sum, curr) => {
    return sum + curr;
}, 0)
console.log(add);

// find() function
let greater = arr.find((v) => v > 5);
console.log(greater);

// some
let isGreateThan6 = arr.some(v => v > 6)
console.log(isGreateThan6)

// every
let eachElePOsitive = arr.every(v => v > 0)
console.log(eachElePOsitive);

console.log(arr);
console.log(arr.toSorted((a, b) => b - a));

let numArr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(numArr.flat(Infinity))

// questions

let users = [
    { name: "u1", age: 24 },
    { name: "u2", age: 30 },
    { name: "u3", age: 50 }
]

// [u1,u2,u3];
let names = users.map(obj => obj?.name);
console.log(names);

// return users array having the age >25
let isAgeGreater25 = users.filter(obj => obj?.age > 25)
console.log(isAgeGreater25);

let products = [
    { name: "pen", price: 10 },
    { name: "book", price: 50 },
    { name: "Bag", price: 100 }
]

// calculate the total price of all products
let totalPrice = products.reduce((sum, curr) => sum + curr?.price, 0);
console.log(totalPrice)

console.log(arr)
console.log(arr.indexOf(2))

let nArr = [1, 2, 3, 2, 3, 4, 5, 6, 7, 6];

let distinctArr = nArr.filter((v, i) => nArr.indexOf(v) === i);
console.log(distinctArr)



