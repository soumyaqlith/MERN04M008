import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='flex justify-evenly p-4 border-b-2 border-green-500'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/user'>UserProfile</Link>
    </div>
  )
}

export default Navbar