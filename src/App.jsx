import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage.jsx'
import Cart from './Component/Cart/Cart.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import Footer from './Component/Footer/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
