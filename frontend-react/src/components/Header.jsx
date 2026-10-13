import React from 'react'
import logo from '../assets/images/stock-logo.png'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'


const Header = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = ()=> {
    localStorage.removeItem("accessToken"); 
    localStorage.removeItem("refreshToken"); 
    setIsLoggedIn(false); 
    navigate("login/")
  }


  return (
    <>
        <nav className='navbar container'>
            <Link to='/' className='navbar-brand text-light fs-1'>DENT MED HUB TEST PORTAL</Link>
            <div>
              {
                  isLoggedIn? (
                    <>
                      <Button text="Dashboard" link="/dashboard/"/>
                      &nbsp;
                      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    </>
                  ) : (

                    <>
                      <Button text="Login" link="/login/"/>
                      &nbsp;
                      <Button text="Register" class="btn btn-outline-info" link="/register/"/>
                    </>

                  )

              }

            </div>
        </nav>
    </>
  )
} 

export default Header 
