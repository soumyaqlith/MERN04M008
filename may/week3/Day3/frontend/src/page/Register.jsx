import React from 'react'
import { useState } from 'react'
import axios from "axios"

function Register() {

    const [formData, setFormData] = useState({
        fullName: "",
        age: 0,
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleRegister = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_API}/user/register`, formData);


            setFormData({
                fullName:"",
                age:0,
                email:"",
                password:""
            })
            alert(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='max-w-6xl m-auto mt-5'>
            <div>
                <label htmlFor="">FullName</label>
                <input
                    type="text"
                    placeholder='Enter your name'
                    className='border p-2'
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                <br />

                <label htmlFor="">Age</label>
                <input
                    type="number"
                    placeholder='Enter your age'
                    className='border p-2'
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="">Email</label>
                <input
                    type="email"
                    placeholder='Enter your email'
                    className='border p-2'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="">Password</label>
                <input
                    type="password"
                    placeholder='Enter your password'
                    className='border p-2'
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <br />
                <div>
                    <button
                        onClick={handleRegister}
                        className='p-2 bg-purple-500 rounded-md'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register