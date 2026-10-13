import { useState } from 'react'
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Test from './components/Test'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'




function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/register/' element={<Register/>} />
        <Route path='/login/' element={<Login/>}/>
        <Route path="/test/" element={<Test/>}/>
        <Route path='/dashboard/' element={<Dashboard/>} />

      </Routes>
    <Footer/>
    </BrowserRouter>
    </> 
  ) 
}

export default App
