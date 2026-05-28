import React from 'react'
import { Route, Routes } from 'react-router'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import PublicRoutes from './PublicRoutes'
import Vehicles from '../pages/Vehicles'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            
            <Route path='/profile' element={
              <PublicRoutes>
                <Profile/>
              </PublicRoutes>
            }></Route>
            <Route path="/vehicles" element={<Vehicles/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes