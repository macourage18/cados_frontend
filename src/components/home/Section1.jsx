import { React, useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export const Section1 = () => {
  
  const [advocates, setAdvocates] = useState([])

  useEffect(()=>{
    getData()
  }, [])

  let getData = async()=>{
    try{
      let response = await Axios.get("https://cados-api.onrender.com/advocates/")
      console.log('RESPONSE:', response)
      setAdvocates(response.data.advocates)
    }
    catch (error) {
      console.error('Error Fetching Data', error)
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        {advocates.map((advocate, index)=>(
            <div key={index}> 
            <img src={advocate.profilePic} alt=""/>
            <strong>{advocate.username}</strong>
            {console.log('advocate:', advocate)}
            <Link to={`/Advocates/${advocate.username || ''}`}>view</Link>
            </div>
        ))}
      </div>
    </div>
  )
}

