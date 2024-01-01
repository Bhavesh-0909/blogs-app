import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import { Appcontext } from '../context/Appcontext';

function Tag() {
  
  
  const navigate = useNavigate();
  const location = useLocation();
  let tag = location.pathname.split("/").at(-1).replace(" ", "-")

  return (
    <div className='mt-20 '>

      <div className='flex gap-3 -mb-16 items-center'>
        <button className='px-2 py-1 border border-black rounded-md'
        onClick={()=> navigate(-1)}>Back</button>
        <p className='font-bold '>Blogged Tagged <span className='underline'>{tag.replace("%20"," ")}</span></p>
      </div>

      <Blogs/>

    </div>
  )
}

export default Tag