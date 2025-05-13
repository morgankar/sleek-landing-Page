import React from 'react'

const Section2 = () => {
  return (
    <div className="container max-w-[1200px] max-h[471px] m-auto flex justify-between items-center">
        <div className="textbox"> 
            <h2 className='text-5xl w-90'>High-Resolution Outputs</h2>
            <h2 className='w-[500px]'>Download any final designs in high-resolution formats suitable for print and digital use. Ensure your work looks professional and polished in any medium</h2>
            <div className="cta mt-6 text-sm font-bold">
            <button className='bg-[#8f4ded] p-4 rounded-[10px]'>Remix Template</button>
            </div>
        </div>
        <img className="max-w-[380px] min-h-[471px] object-cover rounded-3xl" src="/img_2.avif" alt="Image"/>
    </div>
  )
} 

export default Section2 