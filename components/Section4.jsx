import { motion } from "motion/react"



const Section4 = () => {
  return (
    <motion.div 
     initial = {{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8,delay: 0.5 }}
    className='lg:max-w-[1200px] max-w-[90vw] m-auto rounded-3xl mt-18
     noise-bg overflow-hidden w-[90vw] h-[460px] flex lg:items-center p-4 '>  
        <motion.div 
         initial = {{opacity:0,y:50}}
      whileInView={{opacity: 1, y:0}}
      transition={{ duration: 0.8,delay: 0.5 }}
        className="txtblock lg:ml-9 m-auto ">
            <h1 className='lg:text-6xl text-5xl font-medium lg:w-[390px] w-[90vw] '>Seamless Tool <span className='text-[#8b49e9]'>Integration</span></h1>
            <h1 className='lg:w-[450px] w-[80vw] mt-3'>HelixAI offers seamless integration with a variety of popular design and project management tools, ensuring a smooth and efficient workflow.</h1>
        </motion.div>
        <div className="lg:w-[20px] lg:h-[20px] mx-auto relative">
          <div className="itemIcon item1  "><img src="/marqueeImg/a.avif"/></div>
          <div className="itemIcon item2 "><img src="/marqueeImg/b.avif"/></div>
          <div className="itemIcon item3 "><img src="/marqueeImg/c.avif"/></div>
          <div className="itemIcon item4 "><img src="/marqueeImg/d.avif"/></div>
          <div className="itemIcon item5 "><img src="/marqueeImg/e.avif"/></div>
         
        </div>
     </motion.div>
  )
}

export default Section4