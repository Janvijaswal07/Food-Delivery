
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/navbar/Nav'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/loginpopup/LoginPopup'
function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
   <Nav setShowLogin={setShowLogin}/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Cart' element={<Cart/>}/>
    <Route path='Placeorder' element={<Placeorder/>}/>
   </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
