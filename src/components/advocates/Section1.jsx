import React from 'react'
import { useParams } from 'react-router-dom'

export const Section1 = () => {
  const params = useParams()
  const username = params.username
  return (
    <div>
      <h1>Advocates {username} </h1>
    </div>
  )
}

