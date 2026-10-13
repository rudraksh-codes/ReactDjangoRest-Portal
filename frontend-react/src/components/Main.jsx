import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

const Main = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext); 

  return (
    <>
        <div className='container'>
            <div className='p-5 bg-light-dark'>
                <h1 className='text-light'>DENT MED HUB TEST PORTAL</h1>
                <p className="text-light lead">Market Overview Get a quick overview of recent stock performance, price movements, trading volume, and market trends.Stock Prediction:Analyze historical stock data and generate predicted future prices using machine learning models.Performance Analysis:Compare historical and predicted values through interactive charts to identify potential market patterns.</p>
                {
                  isLoggedIn? (
                    <Button text="Explore" link="/explore/" class="btn btn-info" />

                  ) : (
                    <Button text="Login" link="/login/"/>

                  )
                }
            </div>
        </div>
    </>

  )
}

export default Main
