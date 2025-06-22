import { motion } from 'motion/react';
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <motion.div 
      initial = {{opacity: 0}}
      animate={{ opacity: 100}}
      transition={{ duration: 0.7 }}
      className="navbar 
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
          
          <button 
          onClick={() => setIsOpen(!isOpen)}
          
          className='hamburg noise-bg-pointer cursor-pointer px-5 rounded-xl py-2 w-auto font-semibold flex items-center justify-center '> 
            <motion.svg 
            animate={{rotate : isOpen? 90:0 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" /></motion.svg>
          </button>
        </div>
        

      </motion.div>


      {/* Mobile Menu */}
      <div className={`
      ${isOpen ? 'block':'hidden'}
        
        bg-gray-700/60 rounded-2xl  text-shadow-white absolute z-900 backdrop-blur-[8px] right-0 p-5  h-[290px] text-white  top-[100px] left-0 w-[80vw] sm:w-[50vw] px-8 py-4 transition-all duration-300 m-auto`}>
        <ul>
          <li className='mb-3'>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>

          <li className='mb-3'>
            <a href="#" className="text-white hover:text-gray-300">
              How it Works
            </a>
          </li>

          <li className='mb-3'>
            <a href="#" className="text-white hover:text-gray-300">
              Features
            </a>
          </li>

          <li className='mb-3'>
            <a href="#" className="text-white hover:text-gray-300">
              Pricing
            </a>
          </li>

          <li className='mb-3'>
            <a href="#" className="text-white hover:text-gray-300">
              Blog
            </a>
          </li>

          <li className='mb-3'>
            <a href="#" className="text-white hover:text-gray-300">
              Faqs
            </a>
          </li>

          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar

//Make useState use to track changes of the states of each variable you wanna record. 
// it basically can be used to implement certain logic based on what is the state of the variable.