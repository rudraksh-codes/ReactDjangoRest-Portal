import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 bg-light-dark'>
                <h1 className='text-light'>DENT MED HUB TEST PORTAL</h1>
                <p className="text-light lead">Market Overview Get a quick overview of recent stock performance, price movements, trading volume, and market trends.Stock Prediction:Analyze historical stock data and generate predicted future prices using machine learning models.Performance Analysis:Compare historical and predicted values through interactive charts to identify potential market patterns.</p>
                <Button text="Login" link="/login/"/>
                <Button text="test" link="/test/" class="btn btn-danger"/>
            </div>
        </div>
    </>

  )
}

export default Main
