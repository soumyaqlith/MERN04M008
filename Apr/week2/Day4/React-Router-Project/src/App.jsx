
import { Route, Routes } from 'react-router'
import './App.css'
import ProductForm from './components/ProductForm'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/form' element={<ProductForm />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/product-detail/:id' element={<ProductDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
