import React from 'react'

const Footer = () => {
  return (
    <div className='w-full noise-bg sm:h-[321px] h-[80vh]'>
        <div className="textW sm:max-w-[1200px] m-auto mt-20  sm:pt-20 pt-10 px-3 sm:px-0 ">

            <div className="navbar z-[20] flex sm:flex-row flex-col justify-start sm:justify-between items-start sm:items-center max-w-[1260px] ">
            
                <div className="logo flex items-center mb-10 ">
                    <img src="./public/logo.avif" alt="Site Logo" className='w-11'/>
                    <h1 className='text-2xl font-bold '>HelixAI</h1>
                </div>

                <div className="rightNav flex gap-5 ml-2 sm:flex-row flex-col">
                  <h1 className='font-semibold'>How it works</h1>
                  <h1 className='font-semibold'>Features</h1>
                  <h1 className='font-semibold'>Pricing</h1>
                  <h1 className='font-semibold'>Blogs</h1>
                  <h1 className='font-semibold'>FAQ</h1>
                  <h1 className='font-semibold'>Contact</h1> 
                </div>

            </div>
             <div className="w-[99%] h-px bg-gray-400  mt-15 sm:mt-10 mb-5 mx-auto"></div>
             <div className="flex sm:flex-row flex-col-reverse text-gray-400 text-[15px] font-medium justify-between gap-3">
                <div className="first flex sm:flex-row flex-col gap-3 ">
                    <h1>Developed by @morgankar </h1>
                    <h1>Designed by Templyo</h1>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <h1>Privacy Policy</h1>
                    <h1>Terms & Conditions</h1>
                </div>
                
             </div>
        </div>
    </div>
  )
}

export default Footer