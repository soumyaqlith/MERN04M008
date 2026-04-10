import React from 'react'
import { useNavigate } from 'react-router'

function Login() {

    const navigate=useNavigate()

    function handleClick() {
        localStorage.setItem("isLogin", true)
        navigate("/dash")
    }
    return (
        <div>
            <h1>Login page</h1>

            <button onClick={handleClick} className='bg-purple-600 p-2 rounded text-white'>Submit Login</button>
        </div>
    )
}

export default Login