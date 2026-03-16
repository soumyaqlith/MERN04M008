let h1 = document.querySelector("h1");
h1.innerText = "hii"
console.log(h1);

// how to create a element by using the js
// createElement()

let p1 = document.createElement("p");
p1.innerText = "this is paragraph 1"

let p2 = document.createElement("p");
p2.innerText = "this is the paragraph 2"


// document.body.appendChild(p1)
// document.body.appendChild(p2)

document.body.append(p1, p2)

let boxDiv = document.querySelector("#box");
console.log(boxDiv)

let h2 = document.createElement("h2");
h2.innerText = "this is the heading 2"
console.log(h2)

h2.style.color = "blue"

let p3 = document.createElement("p");
p3.innerText = "this is the div paragraph"

boxDiv.append(h2) // at the end 
// boxDiv.prepend(p3) // at the first
// boxDiv.after(p3)  // after the container (out side)
boxDiv.before(p3)   // before the container (out side)

let div = document.querySelector(".box1");
console.log(div)
console.log(div.className)
// div.className = "box4"
// console.log(div)

console.log(div.classList);

div.classList.add("box4", "box5");
console.log(div)

div.classList.remove("box1");
console.log(div.classList.contains("box1"));

div.classList.toggle("box5");

let bgColor = "white"
let btn = document.querySelector("button");
// btn.addEventListener("click",()=>{
//     if(bgColor==="white"){
//         document.body.style.backgroundColor="black"
//         document.body.style.color="white"
//         bgColor="black"
//     }else{
//         document.body.style.color="black"
//         document.body.style.backgroundColor="white"
//         bgColor="white"
//     }
// })

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})

div.classList.replace("box4","box7");

let button=document.createElement("button");
button.innerText="Click me"
button.style.cssText="background-Color:red;color:white"

document.body.prepend(button)


