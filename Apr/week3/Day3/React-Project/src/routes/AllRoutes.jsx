import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'

function AllRoutes() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/movies' element={<Movies />}></Route>
                <Route path='/movie/:id' element={<Movie />}></Route>

                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes