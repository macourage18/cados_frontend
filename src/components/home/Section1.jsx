import { React, useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export const Section1 = () => {
  
  const [advocates, setAdvocates] = useState([])

  useEffect(()=>{
    getData()
  }, [])

  let getData = async()=>{
    let response = await Axios.get("https://cados-api.onrender.com/advocates/")
    console.log('RESPONSE:', response)
    setAdvocates(response.data.advocates)
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        {advocates.map((advocate, index)=>(
            <div key={index}> 
            <img src={advocate.profilePic} alt=""/>
            <strong>{advocate.username}</strong>
            <Link to={`/Advocates/${advocates.username}`}>view</Link>
            </div>
        ))}
      </div>
    </div>
  )
}

