import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Cards from './Cards';

const Blogs = () => {

    const {loading, post}=useContext(Appcontext);

  return (
    <div>
        {loading ? 
            (<Spinner/>):
            (
                post.map((post)=> <Cards post={post}/>)
            ) }
    </div>
  )
}

export default Blogs