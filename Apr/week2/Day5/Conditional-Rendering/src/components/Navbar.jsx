import React from 'react'
import { Link, useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate()

    const isLogin = JSON.parse(localStorage.getItem("isLogin"))
    return (
        <div className='border-b p-4 flex justify-end'>
            <button
                className='bg-purple-600 p-2 rounded text-white'
                onClick={() => {
                    if (!isLogin) navigate("/login")
                    else {
                        navigate("/login")
                        localStorage.setItem("isLogin", false)
                    }
                }}>
                {isLogin ? "Logout" : "Login"}
            </button>
        </div>
    )
}

export default Navbar