import React from 'react'

const Section2 = () => {
  return (
    <>
        <div className="container sm:max-w-[1200px] sm:max-h[471px] m-auto flex sm:justify-between items-center sm:mb-20 w-[90vw] flex-col-reverse sm:flex-row mb-20 ">
            <div className="textbox mt-14"> 
                <h2 className='sm:text-5xl  font-bold sm:w-100 w-[90vw] text-2xl text-center sm:text-left'>High-Resolution Outputs</h2>
                <h2 className='sm:w-[500px] mt-3 w-[90vw] text-center sm:text-left text-2xs'>Download any final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium.</h2>
                <div className="cta mt-6 text-sm font-bold text-center sm:text-left">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
            <img className="sm:max-w-[380px] sm:min-h-[471px] max-w-[65vw] m-auto sm:m-0 object-cover rounded-3xl" src="/img_2.avif" alt="Image"/>
        </div>


        <div className="container sm:max-w-[1200px] sm:max-h[471px] m-auto flex sm:justify-between sm:items-center sm:mb-20 w-[90vw] flex-col-reverse sm:flex-row-reverse mb-20">
             <div className="textbox mt-14"> 
                <h2 className='sm:text-5xl  font-bold sm:w-100 w-[90vw] text-2xl text-center sm:text-left'>Real-Time Collaboration</h2>
                <h2 className='sm:w-[500px] mt-3 w-[90vw] text-center text-2xs sm:text-left'>Seamlessly collaborate with your team in real-time. Share ideas, give feedback, and make edits together, no matter where you are.</h2>
                <div className="cta mt-6 text-sm font-bold text-center sm:text-left">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
            <img className="sm:max-w-[380px] sm:min-h-[471px] max-w-[65vw] m-auto sm:m-0 object-cover rounded-3xl" src="/img_3.avif" alt="Image"/>
           
        </div>


        <div className="container sm:max-w-[1200px] sm:max-h[471px] m-auto flex sm:justify-between sm:items-center sm:mb-20 w-[90vw] flex-col-reverse sm:flex-row mb-20 ">
            <div className="textbox mt-14"> 
                <h2 className='sm:text-5xl  font-bold sm:w-100 w-[90vw] text-2xl text-center sm:text-left'>Advanced Scheduling Tools</h2>
                <h2 className='sm:w-[500px] mt-3 w-[90vw] text-center text-2xs sm:text-left'>Plan and schedule your design projects with ease. Use our scheduling tools to set deadlines, track milestones, and ensure timely delivery of your design work.</h2>
                <div className="cta mt-6 text-sm font-bold text-center sm:text-left">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
            <img className="sm:max-w-[380px] sm:min-h-[471px] max-w-[65vw] m-auto sm:m-0 object-cover rounded-3xl" src="/img_4.avif" alt="Image"/>
        
        </div>
    </>
    
  )
} 

export default Section2 