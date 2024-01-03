import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext';
import Blogs from '../components/Blogs';

function Categorie() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const categorie = location.pathname.split("/").at(-1).replace("%20"," ");

  return (
    <div className='mt-20'>

      <div  className='flex gap-3 -mb-16 items-center'>
        <button className='px-2 py-1 border border-black rounded-md'
        onClick={()=> navigate(-1)}>Back</button>
        <p className='font-bold '>Blog on <span>{categorie}</span></p>
      </div>
  
      <Blogs/>

    </div>
  )
}

export default Categorie