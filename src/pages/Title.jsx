import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';
import Spinner from '../components/Spinneer';
import Cards from '../components/Cards';

function Title() {

  const { setLoading, blog, setBlog}=useContext(Appcontext);
  const [relatedBlog, setRelatedblog]=useState([]);
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);
  console.log(blogId);


    async function fetchData(){
        const url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
        setLoading(true);
        try{
            const data = await fetch(url);
            const output = await data.json();
            console.log(output);
            setBlog(output.blog);
            setRelatedblog(output.relatedBlogs);
        }
        catch{
            console.log("error");
        }
        setLoading(false);
    }

  

  useEffect(()=>{
    if(blogId){
      fetchData();
    }
  },[location.pathname]);

  console.log(blog)

  return (
    <div className='max-w-[600px] w-11/12 flex flex-col gap-5 mt-20 pb-20'>
        {!blog ? 
            (<Spinner/>):
            (
              <div>
                  <div>
                    <h3 className='font-bold'>{blog.title}</h3>
                    <p className='text-xs'>By 
                      <span className='italic'>{blog.author}</span> on 
                        <span className='font-bold underline ml-1'>{blog.category}</span>
                    </p>

                    <p className='text-xs'>Posted on <span>{blog.date}</span></p>

                    <p className='text-sm mt-3'>{blog.content}</p>

                    <p 
                    className='text-xs mt-2 flex flex-wrap gap-x-2'>
                      {blog.tags.map((tag, index)=>
                          <span key={index}
                            className='text-blue-500 hover:text-blue-800 underline'>
                            {`#${tag}`}
                          </span>
                      )}
                    </p>

                  </div>
                  <div>
                        <h3 className='font-bold text-2xl mt-3 mb-3'>Related Blogs</h3>
                        <div className='flex flex-col gap-6'>
                        {relatedBlog.map((post)=>(
                          <Cards key={post.id} post={post}/>
                        ))}
                        </div>
                        
                  </div>
              </div>
              
            ) }
    </div>

  )
}

export default Title