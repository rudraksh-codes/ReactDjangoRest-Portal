import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true)

      const loginData = {username,password}; 
      try{
        const response = await axios.post("http://localhost:8000/api/token/", loginData)
        console.log(response.data)
        console.log("Login Successful")   
        setErrors({})
        setSuccess(true)  
      } 
      catch(error){
        console.log("Login Error:", error.response.data)
        setErrors(error.response.data)
      }
      finally{
        setLoading(false) 
      }

    }

      return (
        <form onSubmit={handleLogin}> 
            <input type="text" placeholder='enter the username' value={username} onChange={(e)=> setUsername(e.target.value)} className='form-control mb-3'/>
            <input type='password' placeholder='enter the password' value={password} onChange={(e)=> setPassword(e.target.value)} className='form-control mb-3'/>
            <small>
                {
                  errors.detail && <div className='text-danger'>{errors.detail}</div>
                }
                
            </small>
            {success && <p className='alert-success text-center'>Logined Successfully!</p>}
            {
                loading? <button type='submit' className='btn btn-outline-info d-block mx-auto'><FontAwesomeIcon icon={faSpinner} spin />Please wait...</button> :
                <button type='submit' className='btn btn-outline-info d-block mx-auto'>Login</button>

            }
        </form>
  )
}

export default Login
