
import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {

  // const [isLogin, setIsLogin] = useState(0)


  // if (isLogin)
  //   return (
  //     <div>
  //       <h1>Hello</h1>
  //       <Logout />
  //     </div>
  //   )

  // else
  //   return (
  //     <div>
  //       <Login />
  //       <button onClick={() => setIsLogin(true)}>Logout</button>
  //     </div>
  //   )

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dash' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
        </Route>
      </Routes>
    </>
  )

}

export default App
