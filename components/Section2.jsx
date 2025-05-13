import React from 'react'

const Section2 = () => {
  return (
    <>
        <div className="container max-w-[1200px] max-h[471px] m-auto flex justify-between items-center  mb-20">
            <div className="textbox"> 
                <h2 className='text-5xl font-bold w-100'>High-Resolution Outputs</h2>
                <h2 className='w-[500px] mt-3'>Download any final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium</h2>
                <div className="cta mt-6 text-sm font-bold ">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
            <img className="max-w-[380px] min-h-[471px] object-cover rounded-3xl" src="/img_2.avif" alt="Image"/>
        </div>


        <div className="container max-w-[1200px] max-h[471px] m-auto flex justify-between items-center  mb-20">
            <img className="max-w-[380px] min-h-[471px] object-cover rounded-3xl" src="/img_3.avif" alt="Image"/>
            <div className="textbox"> 
                <h2 className='text-5xl font-bold w-100'>Real-Time Collaboration</h2>
                <h2 className='w-[500px] mt-3'>Seamlessly collaborate with your team in real-time. Share ideas, give feedback, and make edits together, no matter where you are.</h2>
                <div className="cta mt-6 text-sm font-bold ">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
           
        </div>


        <div className="container max-w-[1200px] max-h[471px] m-auto flex justify-between items-center  mb-20">
            <div className="textbox"> 
                <h2 className='text-5xl font-bold w-100'>Advanced Scheduling Tools</h2>
                <h2 className='w-[500px] mt-3'>Plan and schedule your design projects with ease. Use our scheduling tools to set deadlines, track milestones, and ensure timely delivery of your design work.</h2>
                <div className="cta mt-6 text-sm font-bold ">
                    <button className='bg-[#8f4ded] p-3 rounded-[10px]'>Remix Template</button>
                </div>
            </div>
            <img className="max-w-[380px] min-h-[471px] object-cover rounded-3xl" src="/img_4.avif" alt="Image"/>
        </div>
    </>
    
  )
} 

export default Section2 