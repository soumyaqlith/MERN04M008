
import { Route, Routes } from 'react-router'
import './App.css'
import Register from './page/Register'
import Login from './page/Login'
import AllUsers from './page/AllUsers'
import ProtectRoute from '../routes/ProtectRoute'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/allusers' element={
          <ProtectRoute>
            <AllUsers />
          </ProtectRoute>
        }>
        </Route>
      </Routes>
    </>
  )
}

export default App
