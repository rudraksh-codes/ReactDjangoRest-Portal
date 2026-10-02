import React from 'react'
import logo from '../assets/images/stock-logo.png'

const Header = () => {
  return (
    <>
        <nav className='navbar container'>
            <img src={logo} alt="" className='w-25' />
            <div>
                <a href="" className='btn btn-outline-info'>Login</a>
                <a href="" className='btn btn-info'>Register</a>
            </div>
        </nav>
    </>
  )
}

export default Header
