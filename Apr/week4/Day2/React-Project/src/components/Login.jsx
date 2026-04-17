import React from 'react'
import { Link } from 'react-router'

function Login() {
    return (
        <div className='w-100 m-auto mt-20 '>
            <h1 className='text-center font-bold text-3xl text-white'>Login Page</h1>

            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter your email' className='border' />
            <br />

            <label htmlFor="">password</label>
            <input type="password" placeholder='Enter your password' className='border' />

            <br />
            <button className='pl-3 pr-3 pt-1 pb-1 rounded bg-purple-600 text-white'>Login</button>
            <p>If you have not registered <Link to='/register'>Register</Link></p>
        </div>
    )
}

export default Login