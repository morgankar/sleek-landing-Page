import { motion } from "motion/react"


const Hero = () => {
  return (
<>
    <motion.div 
    initial = {{filter: "blur(10px", y: 80}}
      animate={{ filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.7 }}
       viewport={{ once: true }}
    className="box 
     w-[90vw] sm:h-[550px] 
     h-[80vh]
     max-w-[1200px]
     m-auto rounded-4xl sm:mt-18 mt-15
     noise-bg
     flex
     relative
     overflow-hidden
     
     ">
      <div className="textBlock 
      w-[90vw] ml-2 mt-5
      sm:mt-4 sm:ml-4
      sm:p-5 sm:pt-35
      sm:max-w-[600px]
      sm:min-w-[600px]
      flex flex-col
    
      ">
        <motion.div
         initial = {{filter: "blur(10px", y: 80}}
         animate={{ filter: "blur(0px)", y: 0 }}
         transition={{ duration: 0.7 }}
          viewport={{ once: true }}
         className="heading text-5xl leading-[70px] lg:text-6xl font-bold lg:font-extrabold">

        Your AI-Powered <span className='text-[#8b49e9]'>Design</span> Assistant
        </motion.div>
        <div className="para pt-3 max-w-[500px] mt-2 text-gray-300">
        Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.
        </div>
        <motion.div 
         initial = {{filter: "blur(10px", y: 100}}
      animate={{ filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5 }}
       viewport={{ once: true }}
        className="cta  text-sm font-bold flex sm:flex-row flex-col m-auto sm:m-0 sm:mt-6 mt-7 ml-0">
          <button className='bg-[#8f4ded] p-4 rounded-[10px]'>Remix Template</button>
          <button className='sm:p-4 rounded-[10px] font-semibold p-4 text-gray-300'>More Templates</button>
        </motion.div>
      </div>
      <motion.div
       initial = {{filter: "blur(10px", y: 120}}
      animate={{ filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.9 }}
       viewport={{ once: true }}
      className="
      sm:w-[610px]
      sm:mx-160 sm:mt-10
      absolute 
      mx-10 w-[600px] mt-90">
        <img src='/img_1.avif' className='w-[350px] sm:w-auto h-auto object-contain' alt="banner"/>
        
      </motion.div>
    </motion.div>
  </>)
  
}

export default Hero