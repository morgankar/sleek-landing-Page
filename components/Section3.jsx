import { motion } from "motion/react"


const Section3 = () => {
  return (
    <>
    <motion.div
     initial = {{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8,delay: 0.5 }}
       viewport={{ once: true }}
    className=" container sm:max-w-[1200px] lg:h-[1024px] m-auto max-w-[90vw]">
        
            <h1 className='lg:text-5xl text-5xl font-medium sm:font-bold leading-[50px] lg:max-w-[32vw] max-w-[120vw] p-4'>Transforming Imagination into <span className='text-[#8b49e9] relative '>Reality</span></h1>
            <h2 className='absolute lg:max-w-[36vw] mt-[20px] max-w-[90vw] p-4'>Unlock the full potential of your creativity with our AI-powered design assistant. Explore new dimensions of design, from futuristic visuals to timeless craftsmanship, and witness how AI can turn your wildest ideas into stunning realities.</h2>


        
        <motion.div 
        initial = {{opacity:0,y:50}}
      whileInView={{opacity: 1, y:0}}
      transition={{ duration: 0.8,delay: 0.5 }}
       viewport={{ once: true }}
        className="lg:grid mt-[180px]  ">
            {/* Row1 */}
            <div className=" flex flex-col lg:flex-row items-center sm:gap-5 ">
                <div className="rounded-2xl lg:w-[468px] lg:h-[324px] w-[95vw] h-[50vh] noise-bg-pointer overflow-hidden relative 
              hover:bg-[#a37adb] transition-colors duration-300 cursor-pointer">
                  <div className="blck flex justify-between">
                    <h6 className='lg:text-sm text-xl sm:ml-5 lg:mt-5 lg:w-90 w-[60vw] ml-5 mt-5  lg:leading-5 leading-6 font-medium'>Dive into the world of AI where design possibilities are limitless. Let the cutting-edge technology transform your concepts into breathtaking visuals.</h6>
                    <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 ">
                    <svg className='pl-2 mt-1.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path></svg>
                    </div>

                  </div>
                  <h1 className='sm:text-4xl text-2xl absolute bottom-5 left-4 font-bold'>Witness The Future</h1>
                   
                </div>
                
               
                <div className="mt-6 lg:mt-0 rounded-2xl lg:w-[712px] lg:h-[324px] w-[95vw] h-[50vh] noise-bg-pointer overflow-hidden relative hover:bg-[#a37adb] transition-colors duration-300 cursor-pointer">
                  <div className="blck flex justify-between">
                    <h6 className='lg:text-sm text-xl lg:ml-5 lg:mt-5 lg:w-90 w-[60vw] ml-5 mt-5 lg:leading-5 leading-6 font-medium'>Step beyond the ordinary with designs that defy conventions. Our AI conjures up imaginative visuals that push the boundaries of creativity.</h6>
                    <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 ">
                    <svg className='pl-2 mt-1.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path></svg>
                    </div>

                  </div>
                  <h1 className='sm:text-4xl text-2xl absolute bottom-5 left-4 font-bold'>Visualize the Impossible</h1>
                </div>
              </div>
            </motion.div>
           
             {/* Row2 */}
            <motion.div
             initial = {{opacity:0,y:80}}
              whileInView={{opacity: 1, y:0}}
              transition={{ duration: 0.8,delay: 0.5 }}
               viewport={{ once: true }}
            className=" flex flex-col lg:flex-row items-center gap-5">
                <div className="mt-6 rounded-2xl lg:w-[712px] lg:h-[324px] w-[95vw] h-[50vh] noise-bg-pointer  overflow-hidden relative hover:bg-[#a37adb] transition-colors duration-300 cursor-pointer">
                  <div className="blck flex justify-between">
                    <h6 className='lg:text-sm text-xl lg:ml-5 lg:mt-5 lg:w-90 w-[60vw] ml-5 mt-5 lg:leading-5 leading-6 font-medium'>Experience the perfect blend of form and function. Our AI ensures that every design not only looks stunning but also serves its purpose flawlessly.</h6>
                    <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 ">
                       <svg className='pl-2 mt-1.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path></svg>
                    </div>

                  </div>
                  <h1 className='sm:text-4xl text-2xl absolute bottom-5 left-4 font-bold'>Synergy and Style</h1>
                </div>
                <div className="mt-6 rounded-2xl lg:w-[468px] lg:h-[324px] w-[95vw] h-[50vh] noise-bg-pointer  overflow-hidden relative hover:bg-[#a37adb] transition-colors duration-300 cursor-pointer">
                <div className="blck flex justify-between">
                    <h6 className='lg:text-sm text-xl lg:ml-5 lg:mt-5 lg:w-90 w-[60vw] ml-5 mt-5 lg:leading-5 leading-6 font-medium'>Embrace the elegance of meticulously crafted designs. Our AI polishes every detail to bring a timeless quality to your creative projects.</h6>
                    <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 ">
                       <svg className='pl-2 mt-1.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path></svg>
                    </div>

                  </div>
                  <h1 className='sm:text-4xl text-2xl absolute bottom-5 left-4 font-bold'>Timeless Precision</h1></div>   
            </motion.div>
            
    </motion.div>
        
    
  </>
)
}

export default Section3