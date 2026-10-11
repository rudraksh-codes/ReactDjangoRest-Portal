import React from 'react'
import logo from '../assets/images/stock-logo.png'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'


const Header = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  return (
    <>
        <nav className='navbar container'>
            <Link to='/' className='navbar-brand text-light fs-1'>DENT MED HUB TEST PORTAL</Link>
            <div>
              {
                  isLoggedIn? (
                    <>
                      <Button text="Login" link="/login/"/>
                      <Button text="Register" class="btn btn-outline-info" link="/register/"/>
                    </>
                  ) : (
                    <>
                      <Button text="Dashboard" link="/dashboard/"/>
                      <Button text="Logout" link="/logout/"/>
                    </>

                  )

              }

            </div>
        </nav>
    </>
  )
} 

export default Header 
