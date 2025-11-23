import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Layout from './components/layout'
import Home from "./components/home"
import Modal from './components/modal'
import Cart from "./components/cart"
import Contact from "./components/contact"
import About from "./components/about"
import Wishlist from "./components/wishlist"
import Shop from "./components/shop"
import './App.css'

function App() {
  const [theme,setTheme]=useState('light')
  const toggleTheme=()=>{
    setTheme((prev)=>(prev==='light')? 'dark':'light')
  }
  return (
    <>
    <div className={theme}>
     <Layout toggleTheme={toggleTheme} theme={theme}/>
     <Modal>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      </Modal>
      </div>
    </> 
  )
}

export default App
