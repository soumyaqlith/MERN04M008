console.log("Welcome to loop world");

// while
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// do-while loop
let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 10);


// extra loop in js
// for - in (index)
// for - of (iterable statement)

let obj = {
    name: "xyz",
    age: 40,
    email: "xyz@gmail.com",
}
// for in with obj
for (let key in obj) {
    console.log(obj[key]);
}

// for in with arr
let arr = [1, 2, 3, 4, 5];
for (let idx in arr) {
    console.log(arr[idx])
}


// for of (value)
let arr1 = [1, 2, "hii", true];
for (let v of arr1) {
    console.log(v)
}

// we can create the string by two ways
//   =>literal (double quote, single quote, back tick)
//   => By useing the "String" object 

let str1 = "string 1";
let str3 = `string 3`;
console.log(str1)

let str4 = new String("string4");
console.log(str4.valueOf());

let str2 = 'string 2';
console.log(str2[0]); //s

// let std={
//     name:"tunguru"
// }

// console.log(std.name)
// std.name="bholo"
// console.log(std.name)

str2[0] = "Ca";
console.log(str2)

//string is  immutable(we cant change the value)


