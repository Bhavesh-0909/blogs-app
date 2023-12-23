import React, { useContext } from 'react'
import AppContextProvider, { Appcontext } from '../context/Appcontext'

const Footer = () => {

    const {totalpage, handeler, page}=useContext(Appcontext);
  return (
    <div className='w-full border shadow fixed bottom-0 bg-white py-2'>
        <div className='max-w-[600px] w-11/12 flex justify-between items-center mx-auto'>
            <div className='flex gap-3'>
                { page > 1 &&
                    <button className='px-2 py-1 border border-black rounded-md'
                    onClick={()=> handeler(page - 1)}>Previous</button>
                }
                { page < totalpage &&
                    <button className='px-2 py-1 border border-black rounded-md'
                    onClick={()=> handeler(page + 1)}>Next</button>
                }
            </div>
            <div>
                <p>Page {page} of {totalpage}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer