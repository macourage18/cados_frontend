import { React, useEffect, useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export const Section1 = () => {
  
  const [advocates, setAdvocates] = useState([])
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const getData = async () => {
    try {
      let response = await Axios.get("https://cados-api.onrender.com/advocates/");
      console.log('RESPONSE:', response);
      setAdvocates(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  getData();
}, []);

// Render loading state
if (loading) {
  return <p>Loading...</p>;
}

  return (
    <div className={'mainCont'}>
      <h2>Search developer advocates on this platform</h2>
      <div className={'advocateList'}>
        {advocates.map((advocate, index)=>(
            <div className={'wrapper'} key={index}> 
            <Link to={`/Advocates/${advocate.advocates.advocate.username}`}>
              <img className={'adpfdp'} src={advocate.advocates.profilePic} alt=""/>
            </Link>
            <strong>{advocate.advocates.advocate.username}</strong>
            <p>{advocate.advocates.advocate.bio}</p>
            {console.log('advocate:', advocate)}
            </div>
        ))}
      </div>
    </div>
  )
}

