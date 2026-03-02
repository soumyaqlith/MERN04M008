console.log("Hii welcome");

// way of the declaration

// var
var v;
v = 40;

var a = 50;
console.log(a);

var a = "hello"
a = "bye"
console.log(a);

// let
let b;
b = 70

// let v = 80
// let b;
b = 90;
// let b=100;
console.log(b)

// const
const n = 60;
console.log(n);

// data type
// primitive
// Number
let num=9.8;
console.log(typeof num);

// String
let str="hii";
console.log(typeof str)

// boolean
let isPassed=false;
console.log(isPassed)

// undefined
let value=undefined;
console.log(value)

// null
let nullValue=null;
console.log(typeof nullValue)

// BigInt
let bigValue=BigInt(879874982098349839738974983789);
console.log(bigValue)

// symbol

let symValue=Symbol("%");
console.log(symValue);

// non primitive data type
// Object

let obj={
    name:"xyz",
    age:60,
    isPassed:true,

    childObj:{
        childName:"xyz child",

        nextChildObj:{
            nextName:"hii"
        }
    }
}

console.log(obj["age"]);

console.log(obj.childObj.childName)
console.log(obj.childObj.nextChildObj.nextName)


// Array
let arr=[1,2,4,"hello",false,{name:"xy"},[5,6]];
console.log(arr[5].name);



