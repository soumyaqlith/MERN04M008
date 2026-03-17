// there are three parts of event
// 1. target body
// 2. event name (mouse event,key event,form event etc)
// 3. how to handle the event


let button = document.querySelector("button");
console.log(button)

// button.onclick=()=>{
//     document.body.style.backgroundColor="red"
// }
// button.onclick=()=>{
//     let h1= document.createElement("h1");
//     h1.innerText="this is the h1 tag"
//     document.body.append(h1);
// }

// let obj={
//     name:"xyz"
// }

// obj.name="hiii";
// console.log(obj.name)
// obj.name="bye"
// console.log(obj.name)

// addEventListener()
button.addEventListener("click", () => {
    document.body.style.backgroundColor = "red"
})
button.addEventListener("click", () => {
    let h1 = document.createElement("h1");
    h1.innerText = "this is the h1 tag"
    document.body.append(h1);
})

button.addEventListener("click", () => {
    document.body.style.color = "white"
})


// different types of event 
// mouseevent
//  => click
//  => dbl click
//  => mouseup
//  => mousedown
//  => mousemove
//  =>mouseenter
//  =>mouseleave
 
let p = document.querySelector("p");
console.log(p)

// p.addEventListener("dblclick",()=>{
//     console.log("dbl click")
// })

p.addEventListener("mousedown",()=>{
    console.log("mouse down")
})
p.addEventListener("mouseup",()=>{
    console.log("mouse up")
})
p.addEventListener("mousemove",()=>{
    console.log("mouse move")
})
p.addEventListener("mouseenter",()=>{
    console.log("mouse enter")
})
p.addEventListener("mouseleave",()=>{
    console.log("mouse leave");
})

// form event // input events

// submit  (form event)

// change
// input  (input events)
// focus
// blur

let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    console.log("form submited")
    e.preventDefault()
})

let input=document.querySelector("input");
console.log(input)
// input.addEventListener("change",()=>{
//     console.log("input is changing")
// })
input.addEventListener("input",()=>{
    console.log("input event")
})

input.addEventListener("focus",()=>{
    input.style.backgroundColor="green"
})
input.addEventListener("blur",()=>{
    input.style.backgroundColor="red"
})


// key event
//  keyup
// keydown
// keypress

// document.addEventListener("keydown",()=>{
//     console.log("key down")
// })
// document.addEventListener("keyup",()=>{
//     console.log("key up")
// })

document.addEventListener("keypress",()=>{
    console.log("key press")
})


// window event
// =>load
// =>DomConetentLoaded
// =>scroll
// => resize

window.addEventListener("load",()=>{
    console.log("this page loaded")
})
window.addEventListener("DOMContentLoaded",()=>{
    console.log("dom content loaded")
})
window.addEventListener("scroll",()=>{
    console.log("scroll event")
})
window.addEventListener("resize",()=>{
    console.log("resize")
})


