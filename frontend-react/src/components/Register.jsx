import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)


    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = {username, email, password}
        try{
            const response = await axios.post("http://localhost:8000/api/v1/register/", userData)
            console.log(response.data);     
            console.log("Registeration Successful")
            setErrors({})
            setSuccess(true)
        }
        catch(error){   
            setErrors(error.response.data) // already an object
            console.log("Registration Error : ", error.response.data);

        }
        finally{

        }
    }

    return (
    <>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='enter the username' value={username} onChange={(e)=> setUsername(e.target.value)} className='form-control mb-3'/>
            <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
            <input type='email' placeholder='enter the email' value={email} onChange={(e)=> setEmail(e.target.value)} className='form-control mb-3'/>
            <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
            <input type='password' placeholder='enter the password' value={password} onChange={(e)=> setPassword(e.target.value)} className='form-control mb-3'/>
            <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
            {success && <p className='text-success text-center'>Registered Successfully! go to <Link to="/login/">Login</Link> page.</p>}
            <button type='submit' className='btn btn-outline-info d-block mx-auto'>Register</button>
        </form>
    </>
  )
}

export default Register
