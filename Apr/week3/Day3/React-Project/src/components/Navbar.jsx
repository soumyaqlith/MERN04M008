import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div className='p-2 w-screen h-[70px] flex bg-green-300 '>
            <div className='w-1/4 flex justify-center items-center'>
                <p className='font-bold text-red-600'>HD <span className='text-blue-600'>Movies</span></p>
            </div>

            <div className='w-3/4  flex justify-end p-4'>
                <ul className='p-2 flex items-center gap-3 '>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>
                </ul>

                <div className='flex items-center'>
                    <Link to='/login' className='pl-3 pr-3 pt-1 pb-1 rounded bg-purple-600 text-white'>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar