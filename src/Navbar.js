import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkStyle=({isActive})=>{
    return {
      fontWeight:isActive?'bold':'normal',
    }
  }
  return (
    <>
      <nav>
        <ul>
         <li><NavLink style={navLinkStyle} to="home">Home</NavLink></li>
         <li><NavLink style={navLinkStyle} to="about">About</NavLink></li>
         <li><NavLink style={navLinkStyle} to="products">Products</NavLink></li>
         <li><NavLink style={navLinkStyle} to="profile">Profile</NavLink></li> 
        </ul>
      </nav>
    </>
  )
}

export default Navbar