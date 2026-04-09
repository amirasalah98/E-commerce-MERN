import { useState } from 'react'
import { DarkModeProvider } from './DarkModeContext'
import {Route,Routes} from 'react-router-dom'
import Layout from './components/layout'
import Home from "./components/home"
import Modal from './components/modal'
import Cart from "./components/cart"
import Contact from "./components/contact"
import About from "./components/about"
import Wishlist from "./components/wishlist"
import Shop from "./components/shop"
import Login from "./components/admin/login"
import Signup from "./components/admin/signup"
import './App.css'
import Checkout from './components/checkout'
import OrderSuccess from './components/orderSuccess'

function App() {
  return (
    <>
    <DarkModeProvider>
     <Layout />
     <Modal>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/about' element={<About />}></Route>
        {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route> */}
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/order-success' element={<OrderSuccess />}></Route>
      </Routes>
      </Modal>
      </DarkModeProvider>
    </> 
  )
}

export default App
