console.log("Welcome to coding");

let str = "Qlith Innovation"; // iterable statement
for (let v of str) {
    console.log(v)
}

let arr = [1, 2, 3, 4, 5];  // iterable statement
for (let v of arr) {
    console.log(v)
}


// String
// how to reverse a string (way 1)
let reverseString = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
}
console.log(reverseString);

// way 2
// let arrString=str.split("");
// console.log(arrString)

// let reverseArr=arrString.reverse();
// console.log(reverseArr);

// let reverseStr=reverseArr.join("");
// console.log(reverseStr)

let reverStr = str.split("").reverse().join("");
console.log(reverStr);

let jsStr = "I love JavaScript";
let jsStrArr = jsStr.split(" ");
console.log(jsStrArr)

let revJsString = jsStrArr.reverse().join(" ");
console.log(revJsString)

// way 1
let countVowel = 0;
let lowerCase=jsStr.toLowerCase();

for(let v of lowerCase){
    if(v === "a" || v==="e" || v==="i" || v==="o" || v==="u"){
        countVowel++;
    }
}

console.log(countVowel);

// way 2
let vowels="aeiou";
let countVol=0
for(let v of lowerCase){
    if(vowels.includes(v)) countVol++;
}
console.log(countVol)

let numArr=new Array(5);
numArr.fill(0);
console.log(numArr);

let arr8=["Hello", "World", "JS"];
let str9=arr8.toString();
console.log(arr8);

let numberArr=[1,2,9,4,6,3];
// console.log(numberArr.sort());
console.log("after sort",numberArr.toSorted());
console.log("original ",numberArr);

console.log(numberArr.toReversed());
console.log(numberArr)
console.log(numberArr.toSpliced(2,1))
console.log(numberArr)

// Math obejct
console.log(Math.PI)
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);

console.log(Math.max(2,3,9));
console.log(Math.min(6,8))
console.log(Math.sqrt(5))
console.log(Math.pow(2,3)) //2^3

console.log(Math.floor(6));
console.log(Math.ceil(9.1));

console.log(Math.round(4.4));
console.log(Math.trunc(44.789789687));
console.log(Math.cbrt(8));
console.log(Math.random(9))

console.log(Math.abs(-5))
console.log(Math.sign(-7))  // -1 * 7











