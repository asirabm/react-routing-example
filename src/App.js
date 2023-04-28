import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Profile from './components/Profile'
import PageNotFound from './components/PageNotFound'
import { AuthProvider } from './components/Auth'
import Login from './components/login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='products' element={<Products/>}></Route>
        <Route path='profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    
      </AuthProvider>
  )
}

export default App