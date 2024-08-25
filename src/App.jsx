//import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import PlaceOrder from './components/pages/place-Order/PlaceOrder'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/Cart' element = {<Cart/>}/>
          <Route path='/Order' element = {<PlaceOrder/>}/>
        </Routes>
    </div>
  )
}

export default App