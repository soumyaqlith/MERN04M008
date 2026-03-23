let button = document.querySelector("button");
console.log(button);

button.addEventListener("click", (e) => {
    console.log("click")
    console.log(e.target)
    console.log(e)
    console.log(e.clientX)
    console.log(e.clientY)
})

// let p = document.querySelector("p");
// console.log(p)
// p.addEventListener("mousemove",(e)=>{
//     console.log(e)
// })

// document.addEventListener("keydown",(e)=>{
//     console.log(e.key)
//     console.log(e)
// })

let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    console.log(e)
    e.preventDefault()
})

// let input=document.querySelector("input");
// input.addEventListener("input",(e)=>{
//     console.log(e)
// })

window.addEventListener("DOMContentLoaded", (e) => {
    // console.log(e)
})

let reg_form = document.querySelector(".reg-form");
console.log(reg_form)

reg_form.addEventListener("submit", (e) => {
    e.preventDefault()

    let name = e.srcElement.elements[0].value;
    let age = e.srcElement.elements[1].value;
    let email = e.srcElement.elements[2].value;

    console.log(name, age, email)

    localStorage.setItem("user",JSON.stringify({ name, age, email }));
})

