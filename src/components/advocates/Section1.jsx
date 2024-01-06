import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Section1 = () => {

  const params = useParams()
  const username = params.username

  const [advocate, setAdvocate] = useState([])

  useEffect(()=>{
    getData()
  },[username])

  const getData = async ()=>{
    let response = await axios.get(`https://cados-api.onrender.com/advocates/${username}`)
    console.log('RESPONSE:', response)
    setAdvocate(response.data)
  }

  return (
    <>
    {advocate && (
      <div>
      <h1>{advocate.username}</h1>
      <p>{advocate.bio}</p>
      </div>
    )}
    </>
   
  )
}

