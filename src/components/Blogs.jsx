import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Cards from './Cards';
import Spinner from "./Spinneer"

const Blogs = () => {

    const {loading, post}=useContext(Appcontext);

  return (
    <div className='max-w-[600px] w-11/12 flex flex-col gap-5 mt-20 pb-20'>
        {loading ? 
            (<Spinner/>):
            (
                post.map((post, index)=> <Cards key={index} post={post}/>)
            ) }
    </div>
  )
}

export default Blogs