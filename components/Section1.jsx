import React from 'react'

const Section1 = () => {
  return (
    <div className='section w-[90vw] h-auto max-w-[1200px] m-auto mt-20'>
        <div className="textblock2 ">
            <h1 className='heading text-5xl font-bold leading-[70px] relative'>Unleash Your <span className='text-[#8b49e9]'>Creativity</span></h1>
            <h2 className='absolute max-w-[35vw]'>Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.</h2>
        </div>
        <div className="sectionCards flex gap-7">
          <div className="secCard card1  min-w-[387px] min-h-[239px]
             m-auto rounded-2xl mt-18 noise-bg overflow-hidden">
              <div className="secIcon">Arrow</div>
              <div className="secText"><h1>Upload Brief</h1><h3>Share your project details and let our AI grasp your vision.</h3></div>
            </div>

            <div className="secCard card1  min-w-[387px] h-[239px]
            m-auto rounded-2xl mt-18 noise-bg overflow-hidden">
              <div className="secIcon">Arrow</div>
              <div className="secText"><h1>Upload Brief</h1><h3>Share your project details and let our AI grasp your vision.</h3></div>
            </div>

             <div className="secCard card1  min-w-[387px] h-[239px]
             m-auto rounded-2xl mt-18 noise-bg overflow-hidden">
              <div className="secIcon">Arrow</div>
              <div className="secText"><h1>Upload Brief</h1><h3>Share your project details and let our AI grasp your vision.</h3></div>
            </div>
        </div>
    </div>
  )
}

export default Section1;