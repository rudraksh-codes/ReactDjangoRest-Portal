import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axiosInstance';


const Dashboard = () => {
const [data, setData] = useState(); 
const token = localStorage.getItem("accessToken")   

    useEffect( ()=> {
        const fetchData = async ()=> {
            const response = await axiosInstance.get(
            "/protected-view/", 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }, 
            }
        )
            console.log("response", response)
            setData(response.data.message)
        }
        fetchData();
        
        
    }, )

  return (
    <>
      <h1 className='text-light'>Dashboard</h1>
      <h2 className='text-light'>Returned {data}</h2>
    </>
  )
}

export default Dashboard
