import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import { Appcontext } from '../context/Appcontext';

function Tag() {
  
  const {post}=useContext(Appcontext);
  const navigate = useNavigate();
  const location = useLocation();
  let tag = location.pathname.split("/").at(-1).replace(" ", "-")

  return (
    <div className='mt-20'>
      <button onClick={()=> navigate(-1)}>Back</button>
      <p>Blogged Tagged <span>{tag.replace("%20"," ")}</span></p>
      <Blogs/>

    </div>
  )
}

export default Tag