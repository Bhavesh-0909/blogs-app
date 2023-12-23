import React from 'react'

const Cards = ({post}) => {

    return (
    <div>
        <h3 className='font-bold'>{post.title}</h3>
        <p className='text-xs'>By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span></p>
        <p className='text-xs'>Posted on <span>{post.date}</span></p>
        <p className='text-sm mt-3'>{post.content}</p>
        <p 
        className='text-xs mt-2 flex flex-wrap gap-x-2'>
        {post.tags.map((tag, index)=>
        <span key={index} className='text-blue-500 underline'>{`#${tag}`}</span>)}</p>
    </div>
  )
}

export default Cards