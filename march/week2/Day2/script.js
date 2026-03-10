console.log("Hello")

// Higher order function
// it is accepting a function as a parameter
function Hof(func) {
    func()
}

Hof(function () { console.log("this is the argument function") });


// it is return a function

function Hof1() {
    let childFun = function () {
        console.log("this is the inside function")
    }
    return childFun;

}

Hof1()()

// IIF 
// (function () {
//     console.log("this is the IIF")
// })()

// callback function
// it is a function used as an argument at the time calling

// Arrow function

let arrowFun = () => {
    console.log("this is the arrow function")
}

arrowFun()

// sort the arr
let arrstr = ["item 8", "item 2", "item 5", "item 4", "item 1"];

let sort = () => {
    return arrstr.toSorted();
}
console.log(sort())

console.log(arrstr)


let arr = [1, 4, 5, 3, 6, 7]
// for(let  v of arr){
//     console.log(v)
// }

arr.forEach((v,i)=>{
    console.log(v,i);
})

console.log({} == {});
console.log([] == []);

// optional operator
let obj={
    name:"hii"
}
console.log(obj?.name);

console.log(undefined ?? "hjksdh")

