

import './App.css'
import { CartProvider } from './Contexts/CartContext'
import LandingPage from './LandingPage'


import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import About from './Pages/About'
import Contact from './Pages/Contact'
function App() {

  return (
    <>

    <CartProvider >
    
    <Router>
    <Routes>
    <Route path='/' element={ <LandingPage />} />
    <Route  path='/cart' element ={<Cart />} />
    <Route path='/about' element ={<About />} />
    <Route path='/contact'  element ={<Contact />} />
    </Routes>
    
    </Router>
      
    
    </CartProvider>
 
     
      </>
  )
}

export default App
