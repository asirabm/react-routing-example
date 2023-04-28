import React from 'react'
import { useAuth } from './Auth'
import { Navigate,useLocation} from 'react-router-dom'

function ProtectedRoute({children}) {
    const location =useLocation()
    console.log(location.pathname)
    const auth=useAuth()
    if(!auth.user){
     return <Navigate to='/login' state={{path:location.pathname}}/>
    }
   return children
}

export default ProtectedRoute