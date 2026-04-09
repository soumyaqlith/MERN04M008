import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    return (
        <div className='p-4 border-b flex justify-evenly'>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/form' className='p-2 bg-blue-500 text-white font-semibold rounded-md'>Add Product</Link>
        </div>
    )
}

export default Navbar