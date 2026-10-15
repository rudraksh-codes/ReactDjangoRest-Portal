import React, { Children } from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'


const PrivateRoute = ({children}) => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  return isLoggedIn? (
    children
  ) : (
    <Navigate to='/login/'/>
  )
}

export default PrivateRoute
