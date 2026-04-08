import React from 'react'
import { Outlet } from 'react-router'

function UserDashboard() {
  return (
    <div>
        Dashbord
        <Outlet/>
    </div>
  )
}

export default UserDashboard