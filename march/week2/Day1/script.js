console.log("Welcome");

// function
//  types of function
//  =>anonymous function
//  =>Named function
//  =>expressional function
//  =>nexted function
//  =>IIF function
//  =>Arrow function
//  =>Higher order function


// anonymous function
//  it is func which has no names
// function(){

// }

// named function
function fun1(a, str) {
    console.log(`hii this is ${str} ${a}`);
}


fun1(50, "tunguru")

// let num = prompt("Enter any number")
function fun2(num = 90) {
    if (num % 2 === 0) {
        console.log(num, " is even number")
    } else {
        console.log(num, " is odd number")
    }
}

fun2()

// expressional func // function as a expression
let fun3 = function () {
    console.log("this is the expression function")
}

fun3();

function parent() {
    console.log("this is the parent func");
    function child() {
        console.log("this is the child function")
        function nextChild() {
            console.log("this is the next child")
        }
        nextChild()
    }
    child()
}
parent()

function func5() {
    let a = 90;
    // console.log(a);
    return a;
}
// console.log(a);
console.log(func5());
// console.log(value)



