import { motion } from "motion/react"


const Reviews = () => {
  return  <>
    <motion.div
     initial = {{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8,delay: 0.5 }}
       viewport={{ once: true }}
    className='lg:max-w-[1200px] max-w-[90vw] m-auto mt-20 '>
         <h1 className='lg:text-6xl text-5xl font-medium lg:w-[520px] w-[95vw] lg:ml-9 '>Customer <span className='text-[#8b49e9]'>Success</span> Stories</h1>
         <h1 className='lg:w-[650px] mt-5 lg:ml-9  w-[95vw] '>Discover how our platform has helped businesses create outstanding content effortlessly. Hear directly from our users about their of success and satisfaction.</h1>
    </motion.div>


    <motion.div 
     initial = {{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8,delay: 0.5 }}
       viewport={{ once: true }}
    className="customerCard mt-16 flex flex-col lg:flex-row gap-7 lg:gap-1 lg:justify-center lg:max-w-[1200px] m-auto "> 

      <div className="customerCard1 lg:w-[384px] lg:h-[239px] w-[90vw] h-[40vh] noise-bg rounded-md m-auto p-3">
        <div className="flex  justify-start  items-center mt-2">
          <div className="profilepic ml-6 rounded-[50%] w-[60px] h-[60px] bg-amber-300 overflow-hidden"><img className="scale-190" src="prof1.avif"/></div>
          <h1 className='text-2xl font-medium ml-4'>John D.</h1>
         </div>
         <h1 className='ml-2 text-center mt-8 lg:max-w-[500px]'>Using this AI-powered design assistant has completetly transformed the way i approach my projects. It's like having a professional designer on call 24/7. Highly recommend it!</h1>
      </div>

      <div className="customerCard2 lg:w-[384px] lg:h-[239px] w-[90vw] h-[40vh] noise-bg rounded-md m-auto p-3">
        <div className="flex  justify-start  items-center mt-2">
          <div className="profilepic ml-6 rounded-[50%] w-[60px] h-[60px] overflow-hidden"><img className="object-contain scale-190" src="prof2.avif"/></div>
          <h1 className='text-2xl font-medium ml-4'>Michael S.</h1>
         </div>
         <h1 className='ml-2 text-center mt-8 lg:max-w-[500px]'>The design suggestions are spot on and the automated features save me so much time. I can focus more on creativity rather than getting bogged down in details.</h1>
      </div>

       <div className="customerCard3 lg:w-[384px] lg:h-[239px] w-[90vw] h-[40vh] noise-bg rounded-md m-auto p-3">
        <div className="flex  justify-start  items-center mt-2">
          <div className="profilepic ml-6 rounded-[50%] w-[60px] h-[60px] bg-amber-300 overflow-hidden"><img src="prof3.avif"/></div>
          <h1 className='text-2xl font-medium ml-4'>David L.</h1>
         </div>
         <h1 className='ml-2 text-center mt-8 lg:max-w-[500px]'>This tool is a game-changer! Its incredibly intuitive and the results are always impressive. I can't imagine working without it now.</h1>
      </div>
      
    </motion.div>
  </>
}

export default Reviews