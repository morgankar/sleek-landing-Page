import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar 
      top-8 z-[20] 
      mx-auto flex flex-row justify-between 
      px-8 mt-8 sm:mt-9 mb-4 
      items-center
      max-w-[1260px]">
        <div className="logo flex items-center">
        <img src="./public/logo.avif" alt="Site Logo" className='w-11'/>
        <h1 className='text-2xl font-bold '>HelixAI</h1>
        </div>
        <div className="rightNav flex gap-5 items-center">
          <h1 className='font-semibold opacity-0 sm:opacity-100'>More Designs</h1>
          <button className='hamburg noise-bg px-5 rounded-xl py-2 w-auto font-semibold flex items-center justify-center '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" /></svg>
          </button>
        </div>
        

      </div>
    </>
  )
}

export default Navbar