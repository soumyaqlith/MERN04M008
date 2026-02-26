// single line comment
/* this is multi line comment*/

// Arithmatic operator
// + - * / % **
console.log(2 + 3);
console.log(4 - 2);
console.log(5 * 4);
console.log(5 / 2);

console.log(5 % 2);
console.log(2 ** 3);

// Increment  :- post , pre
// decrement  :- post , pre
let a = 4
console.log(a++);
console.log(a);

console.log(++a);

let b = 5 + 4;
console.log(b--);
console.log(b);

console.log(--b);

let c = 4;
c %= 5;
console.log(c)

// comparision operator
console.log(5 > 8);//false
console.log(6 >= 6);//true
console.log((4 + 5) < (6 - 2))// false

// ==
console.log(2 == 2);//true
console.log(2 == 1);//false
console.log("true" == "true");//true
console.log("false" == "false");//true
console.log(2 == "2");//true
console.log(1 == true);//true
console.log(true + 2 == "2");//false
console.log("true" == "false");//false
console.log("true+1" == "false+2");//false

// ===
console.log(2 === 1);//false
console.log("2" === 2);//false
console.log(true === 1);//false
console.log("test" === "test");//true


console.log(0 == 0);//true
console.log(undefined == undefined);//true
console.log(undefined == 0);//false
console.log(null == null);//true
console.log(undefined == null);//true
console.log(undefined === null);//false

console.log({} == {});//false
console.log([] == []);//false

console.log(1 !== "1");//true

// logical operator
// && , || , !
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && "shfdkjfdks");

console.log(true || true);//true
console.log(true || false);
console.log(false || true)
console.log(false || false)
console.log(0 || 1);

console.log(!true)
console.log(!false)
