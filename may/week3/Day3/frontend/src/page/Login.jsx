import React from 'react'
import { useState } from 'react'
import axios from "axios"

function Login() {

  const [formData, setFormData] = useState({
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

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_API}/user/login`, formData);

      setFormData({
        email: "",
        password: ""
      })

      alert(response.data.message)
    } catch (error) {
      // alert(error.message)
      console.log(error)
    }
  }

  return (
    <div className='max-w-6xl m-auto mt-5'>
      <div>

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
            onClick={handleLogin}
            className='p-2 bg-purple-500 rounded-md'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login