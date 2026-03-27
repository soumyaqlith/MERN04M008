let loginForm = document.querySelector(".login");
let inputs = document.querySelectorAll(".login input");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = inputs[0].value;
    let password = inputs[1].value;

    let localUsers = localStorage.getItem("users");
    let users = JSON.parse(localUsers);

    if (!email || !password) {
        alert("kindly fill all the fields")
    } else {
        let user = users.find((obj) => obj.email === email);
        if (!user) {
            alert("Invalid Email")
        } else {
            if (user.password === password) {
                alert("login success");
                window.location="products.html"
            } else {
                alert("Invalid password")
            }
        }
    }
})

