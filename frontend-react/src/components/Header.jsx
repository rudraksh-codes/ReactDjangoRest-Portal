import React from 'react'
import logo from '../assets/images/stock-logo.png'
import Button from './Button'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
        <nav className='navbar container'>
            <Link to='/' className='navbar-brand text-light fs-1'>DENT MED HUB TEST PORTAL</Link>
            <div>
                <Button text="Login" link="/login/"/>
                <Button text="Register" class="btn btn-outline-info" link="/register/"/>
            </div>
        </nav>
    </>
  )
} 

export default Header 
