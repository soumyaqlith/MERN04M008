import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'
import Nav from '../components/Nav'

function AllRoutes() {
    return (
        <div>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>

                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes