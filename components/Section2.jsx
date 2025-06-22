import { motion } from "motion/react"


const Section2 = () => {
  return (
    <>
        <motion.div 
         initial = {{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8,delay: 0.5 }}
       viewport={{ once: true }}
        className="container lg:max-w-[1200px] lg:max-h[471px] m-auto flex lg:justify-between items-center lg:mb-20 w-[90vw] flex-col-reverse lg:flex-row mb-20 ">
            <div className="textbox mt-14"> 
                <h2 className='lg:text-5xl font-bold lg:w-100 w-[90vw] text-2xl text-center lg:text-left'>High-Resolution Outputs</h2>
                <h2 className='lg:w-[500px] mt-3 w-[90vw] text-center lg:text-left text-2xs'>Download any final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium.</h2>
                <div className="cta mt-6 text-sm font-bold text-center lg:text-left">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
            <img className="lg:max-w-[380px] lg:min-h-[471px] max-w-[65vw] m-auto lg:m-0 object-cover rounded-3xl" src="/img_2.avif" alt="Image"/>
        </motion.div>

        <motion.div
        initial = {{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8,delay: 0.5 }}
       viewport={{ once: true }}
         className="container lg:max-w-[1200px] lg:max-h[471px] m-auto flex lg:justify-between lg:items-center lg:mb-20 w-[90vw] flex-col-reverse lg:flex-row-reverse mb-20">
             <div className="textbox mt-14"> 
                <h2 className='lg:text-5xl font-bold lg:w-100 w-[90vw] text-2xl text-center lg:text-left'>Real-Time Collaboration</h2>
                <h2 className='lg:w-[500px] mt-3 w-[90vw] text-center text-2xs lg:text-left'>Seamlessly collaborate with your team in real-time. Share ideas, give feedback, and make edits together, no matter where you are.</h2>
                <div className="cta mt-6 text-sm font-bold text-center lg:text-left">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
            <img className="lg:max-w-[380px] lg:min-h-[471px] max-w-[65vw] m-auto lg:m-0 object-cover rounded-3xl" src="/img_3.avif" alt="Image"/>
        </motion.div>

        <motion.div 
        initial = {{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 0.8,delay: 0.5 }}
       viewport={{ once: true }}
        className="container lg:max-w-[1200px] lg:max-h[471px] m-auto flex lg:justify-between lg:items-center lg:mb-20 w-[90vw] flex-col-reverse lg:flex-row mb-20 ">
            <div className="textbox mt-14"> 
                <h2 className='lg:text-5xl font-bold lg:w-100 w-[90vw] text-2xl text-center lg:text-left'>Advanced Scheduling Tools</h2>
                <h2 className='lg:w-[500px] mt-3 w-[90vw] text-center text-2xs lg:text-left'>Plan and schedule your design projects with ease. Use our scheduling tools to set deadlines, track milestones, and ensure timely delivery of your design work.</h2>
                <div className="cta mt-6 text-sm font-bold text-center lg:text-left">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
            <img className="lg:max-w-[380px] lg:min-h-[471px] max-w-[65vw] m-auto lg:m-0 object-cover rounded-3xl" src="/img_4.avif" alt="Image"/>
        </motion.div>
    </>
  )
} 

export default Section2
