async function getData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();

        let ul = document.createElement("ul");
        data.forEach((obj) => {
            let li = document.createElement("li");
            li.innerText = obj.title;

            ul.append(li);
        })

        document.body.append(ul)
    } catch (error) {
        console.log(error)
    }
}
getData()

// post
async function createData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: "hii",
                body: "this is body"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        });

        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// createData()


// update 
async function updateData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            body: JSON.stringify({
                title: "this is new title",
                userId: 102,
                body: "this is the new body"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// updateData()

// delete data
async function deleteData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
        });
        let data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


// deleteData()


// ui
// create a nav bar 
// inside the navbar add one button login
// in login page add two field (email,password) register
// go to register page (fullName,age,email,password)

