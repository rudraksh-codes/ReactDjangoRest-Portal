import React from 'react'
import logo from '../assets/images/stock-logo.png'
import Button from './Button'


const Header = () => {
  return (
    <>
        <nav className='navbar container'>
            <img src={logo} alt="" className='w-25' />
            <div>
                <Button text="Login" />
                <Button text="Register" class="btn btn-outline-info" />
            </div>
        </nav>
    </>
  )
}

export default Header
