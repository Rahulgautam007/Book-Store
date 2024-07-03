import React from 'react'
import Home from './home/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'
import Logout from './components/Logout'
import Contact from './components/Contact'
import Cart from './components/Cart'
import CartState from './Context/cart/Cartstate'



function App() {
  const[authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <CartState>

     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to={"/signup"}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
     </Routes>
     <Toaster/>
     
      </CartState>
   
    </div>
  )
}

export default App
