import React from 'react'
import { Route, Routes } from 'react-router'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes