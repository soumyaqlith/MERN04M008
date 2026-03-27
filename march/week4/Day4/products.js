import { products } from "./data.js";



let container = document.querySelector(".container");

products.forEach((obj) => {
    container.innerHTML += `
            <div class="card w-[200px] h-[300px] p-3 rounded border">
            <img src=${obj.image} alt="" class="">
            <p>name : ${obj.name}</p>
            <p>desc :${obj.desc}</p>
            <p>price :${obj.price}</p>
            <p>Brand :${obj.brand}</p>
        </div>`
})
