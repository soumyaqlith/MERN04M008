import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify';

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prev => (
            {
                ...prev,
                [name]: value,
            }
        ))
    }

    function handleLogin() {
        let localStorageData = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = localStorageData.find((user) => user.email == formData.email);

        if (existingUser) {
            if (existingUser.password == formData.password) {
                localStorage.setItem("loginUser", JSON.stringify(existingUser))
                localStorage.setItem("isLogin", true)
                navigate("//profile")
                toast.success("login successfull")
            } else {
                toast.error("Invalid password");
            }
        } else {
            toast.error("Invalid email");
        }
    }

    return (
        <div className='w-100 m-auto mt-20 '>
            <h1 className='text-center font-bold text-3xl text-white'>Login Page</h1>

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
                onClick={handleLogin}
            >Login</button>
            <p>If you have not registered <Link to='/register'>Register</Link></p>
        </div>
    )
}

export default Login