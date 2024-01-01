import React from 'react'
import { NavLink } from 'react-router-dom'

const Cards = ({post}) => {


    return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <h3 className='font-bold hover:underline'>{post.title}</h3>
      </NavLink>
        
        <p className='text-xs'>By 
          <span className='italic'>{post.author}</span> on 
          <NavLink to={`/categorie/${post.category}`}>
            <span className='font-bold underline ml-1'>{post.category}</span>
          </NavLink>
        </p>

        <p className='text-xs'>Posted on <span>{post.date}</span></p>

        <p className='text-sm mt-3'>{post.content}</p>

        <p 
        className='text-xs mt-2 flex flex-wrap gap-x-2'>
          {post.tags.map((tag, index)=>
            <NavLink key={index} to={`/tag/${tag}`}>
              <span 
                className='text-blue-500 hover:text-blue-800 underline'>
                {`#${tag}`}
              </span>
            </NavLink>
          )}
        </p>

    </div>
  )
}

export default Cards