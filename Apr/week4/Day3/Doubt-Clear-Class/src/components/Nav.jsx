import React from 'react'
import { Link } from 'react-router'
import { FaCartArrowDown, FaOpencart } from "react-icons/fa";

function Nav() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <FaCartArrowDown />
            <FaOpencart />

        </div>
    )
}

export default Nav