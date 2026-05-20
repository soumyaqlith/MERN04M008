
import { Route, Routes } from 'react-router'
import './App.css'
import Register from './page/Register'
import Login from './page/Login'

function App() {

  return (
    <>
     <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
    </>
  )
}

export default App
