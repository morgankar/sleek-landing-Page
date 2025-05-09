import React, { useState } from 'react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar 
      top-8 z-[20] 
      mx-auto flex flex-row justify-between 
      px-8 mt-9 mb-4 
      items-center
      max-w-[1260px]">
        <div className="logo flex items-center">
        <img src="./public/logo.avif" alt="Site Logo" className='w-13'/>
        <h1 className='text-3xl font-bold '>HelixAI</h1>
        </div>
       
        <h1 className='font-semibold'>More Designs</h1>

      </div>
    </>
  )
}

export default Navbar