import React, { useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify';

function Register() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleChange = function (e) {
        const { value, name } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegister = (e) => {
        e.preventDefault();
        let existingLocalStUser = JSON.parse(localStorage.getItem("users")) || [];

        existingLocalStUser.push(formData);

        localStorage.setItem("users", JSON.stringify(existingLocalStUser))

        toast.success("successfully user created")
    }

    return (
        <div className='w-100 m-auto mt-20 '>
            <h1 className='text-center font-bold text-3xl text-white'>Register Page</h1>

            <label htmlFor="" >FullName</label>
            <input
                type="text"
                placeholder='Enter your name'
                className='border'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="">Email</label>
            <input
                type="email"
                placeholder='Enter your email'
                className='border'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="">Mobile No</label>
            <input
                type="text"
                placeholder='Enter your mobile number'
                className='border'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
            />
            <br />
            <label htmlFor="">password</label>
            <input
                type="password"
                placeholder='Enter your password'
                className='border'
                name='password'
                value={formData.password}
                onChange={handleChange}
            />

            <br />
            <button
                className='pl-3 pr-3 pt-1 pb-1 rounded bg-purple-600 text-white'
                onClick={handleRegister}
            >Register</button>
            <p>If you have already registered <Link to='/login'>Login</Link></p>
        </div>
    )
}

export default Register