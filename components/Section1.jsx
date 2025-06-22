import { motion } from 'motion/react';

const Section1 = () => {
  return (
    <div className='section w-[90vw] h-auto lg:max-w-[1200px] m-auto mt-40 mb-26'>
        <motion.div 
         initial = {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.8,delay: 0.5 }}
        className="textblock2">
            <h1 className='heading text-5xl font-bold leading-[70px] relative'>Unleash Your  <span className='text-[#8b49e9]'>Creativity</span></h1>
            <h2 className='lg:max-w-[35vw]  max-w-[80vw] mt-5'>Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.</h2>
        </motion.div>


        <motion.div 
          initial = {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.8,delay: 0.3 }}
        className="sectionCards flex flex-col gap-7  md:flex-col lg:flex-row lg:mt-10 w-[90vw]">

          <div className="secCard card1 lg:min-w-[387px] min-w-[90vw] min-h-[239px] max-w-[387px] max-h-[239px] relative lg:max-w-[80vw] 
             m-auto lg:m-0 rounded-2xl mt-10 lg:mt-5 noise-bg overflow-hidden">
              <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 absolute">
                <svg className='m-auto ml-0.5 p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" fill="currentColor"><path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9V15H10V9H5L12 2L19 9H14Z"></path></svg>
              </div>
              <div className="secText absolute mt-30 ml-6 mr-2">
                <h1 className='text-3xl font-semibold'>Upload Brief</h1>
              <h2 className='font-light'>Share your project details and let our AI grasp your vision.</h2></div>
            </div>

            <div className="secCard card2 min-w-[90vw] lg:min-w-[387px] min-h-[239px] max-w-[387px] max-h-[239px] relative 
             m-auto lg:m-0 rounded-2xl mt-2 lg:mt-5 noise-bg lg:max-w-[80vw] overflow-hidden">
              <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 absolute">
              <svg className='m-auto ml-0.2 p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z"></path></svg>
              </div>
              <div className="secText absolute mt-30 ml-6 mr-2">
                <h1 className='text-3xl font-semibold'>Generate Designs</h1>
              <h2 className='font-light'>Watch as our AI crafts unique design ideas tailored to you.</h2></div>
            </div>

            <div className="secCard card3 min-w-[90vw] lg:min-w-[387px] min-h-[239px] max-w-[387px] max-h-[239px] relative lg:max-w-[80vw]
             m-auto lg:m-0 rounded-2xl mt-2 lg:mt-5 noise-bg overflow-hidden">
              <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 absolute">
              <svg className='m-auto ml-0.5 p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.99958 12.9999C4.99958 7.91198 7.90222 3.5636 11.9996 1.81799C16.0969 3.5636 18.9996 7.91198 18.9996 12.9999C18.9996 13.8229 18.9236 14.6264 18.779 15.4027L20.7194 17.2353C20.8845 17.3913 20.9238 17.6389 20.815 17.8383L18.3196 22.4133C18.1873 22.6557 17.8836 22.7451 17.6412 22.6128C17.5993 22.59 17.5608 22.5612 17.5271 22.5274L15.2925 20.2928C15.1049 20.1053 14.8506 19.9999 14.5854 19.9999H9.41379C9.14857 19.9999 8.89422 20.1053 8.70668 20.2928L6.47209 22.5274C6.27683 22.7227 5.96025 22.7227 5.76498 22.5274C5.73122 22.4937 5.70246 22.4552 5.67959 22.4133L3.18412 17.8383C3.07537 17.6389 3.11464 17.3913 3.27975 17.2353L5.22014 15.4027C5.07551 14.6264 4.99958 13.8229 4.99958 12.9999ZM6.47542 19.6957L7.29247 18.8786C7.85508 18.316 8.61814 17.9999 9.41379 17.9999H14.5854C15.381 17.9999 16.1441 18.316 16.7067 18.8786L17.5237 19.6957L18.5056 17.8955L17.4058 16.8568C16.9117 16.3901 16.6884 15.7045 16.8128 15.0364C16.9366 14.3722 16.9996 13.6911 16.9996 12.9999C16.9996 9.13037 15.0045 5.69965 11.9996 4.04033C8.99462 5.69965 6.99958 9.13037 6.99958 12.9999C6.99958 13.6911 7.06255 14.3722 7.18631 15.0364C7.31078 15.7045 7.08746 16.3901 6.59338 16.8568L5.49353 17.8955L6.47542 19.6957ZM11.9996 12.9999C10.895 12.9999 9.99958 12.1045 9.99958 10.9999C9.99958 9.89537 10.895 8.99994 11.9996 8.99994C13.1041 8.99994 13.9996 9.89537 13.9996 10.9999C13.9996 12.1045 13.1041 12.9999 11.9996 12.9999Z"></path></svg>
              </div>
              <div className="secText absolute mt-30 ml-6 mr-2">
                <h1 className='text-3xl font-semibold'>Refine Creation</h1>
              <h2 className='font-light'>Perfect your chosen concept with easy-to-use AI tools.</h2></div>
            </div>
      
        </motion.div>
    </div> 
  )
}

export default Section1;