let registerForm = document.querySelector(".register")
let inputs = document.querySelectorAll(".register input");

let users = [];

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let name = inputs[0].value;
    let age = inputs[1].value;
    let email = inputs[2].value;
    let password = inputs[3].value;

    if (!name || !age || !email || !password) {
        alert("Kindly fill all the field")
    } else {
        users.push({ name, age, email, password })

        localStorage.setItem("users", JSON.stringify(users));
        alert("successfully register")
    }

})
