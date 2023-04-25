import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Profile from './components/Profile'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='home' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='products' element={<Products/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    
    </>
  )
}

export default App