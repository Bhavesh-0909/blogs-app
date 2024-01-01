import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext';
import Blogs from '../components/Blogs';

function Categorie() {

  const navigate = useNavigate();
  const location = useLocation();
  const categorie = location.pathname.split("/").at(-1);
  const {post}=useContext(Appcontext)

  return (
    <div className='mt-20'>
      <button onClick={()=> navigate(-1)}>Back</button>
      <p>Blog on <span>{categorie}</span></p>
    {<Blogs/> }

    </div>
  )
}

export default Categorie