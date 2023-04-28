import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

function Profile() {
  const auth=useAuth()
  const navigate=useNavigate()
  const logoutHandle=()=>{
    auth.logout()
    navigate('/')
  }
  return (
   <div>
     <h1>Welcome {auth.user}</h1>
     <button onClick={logoutHandle}>Logout</button>
   </div>
  )
}

export default Profile