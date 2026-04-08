import React, { useState } from 'react'

function Register() {
    // const [fullName, setFullName] = useState("");
    // const [age, setAge] = useState(0);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [formData, setFormData] = useState({
        fullName: "",
        age: 0,
        email: "",
        password: ""
    })

    function handleChange(e) {
        let { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }


    function handleSubmit() {
        // console.log(fullName, age, email, password)
        // localStorage.setItem("domyuser",JSON.stringify({fullName,age,email,password}))
        console.log(formData)
    }

    
    return (
        <div>
            <h1>Register page</h1>

            <div>
                <label htmlFor="">FullName : </label>
                <input
                    type="text"
                    placeholder='Enter your name'
                    value={formData.fullName}
                    name='fullName'
                    // onChange={(e) => setFullName(e.target.value)}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="">Age : </label>
                <input
                    type="number"
                    placeholder='Enter your age'
                    value={formData.age}
                    // onChange={(e) => setAge(e.target.value)}
                    name='age'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="">Email : </label>
                <input
                    type="email"
                    placeholder='Enter your email'
                    value={formData.email}
                    // onChange={(e) => setEmail(e.target.value)}
                    name='email'
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="">Password : </label>
                <input
                    type="password"
                    placeholder='Enter your password'
                    value={formData.password}
                    // onChange={(e) => setPassword(e.target.value)}
                    onChange={handleChange}
                    name='password'
                />
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Register