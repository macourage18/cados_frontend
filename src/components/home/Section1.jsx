import { React, useEffect, useState } from 'react'
import Axios from 'axios'


export const Section1 = () => {
  
  const [Advocates, setAdvocates] = useState([])

  useEffect(()=>{
    getData()
  }, [])

  let getData = async()=>{
    let response = await Axios.get("http://127.0.0.1:8000/advocates/")
    console.log('RESPONSE:', response)
    // setAdvocates(response)
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

