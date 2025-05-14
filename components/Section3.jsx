import React from 'react'

const Section3 = () => {
  return (
    <div className="container max-w-[1200px] h-[100vh] m-auto">
        
            <h1 className='text-5xl font-bold leading-[50px] max-w-[32vw]'>Transforming Imagination into <span className='text-[#8b49e9] relative'>Reality</span></h1>
            <h2 className='absolute max-w-[36vw] mt-[15px]'>Unlock the full potential of your creativity with our AI-powered design assistant. Explore new dimensions of design, from futuristic visuals to timeless craftsmanship, and witness how AI can turn your wildest ideas into stunning realities.</h2>
        
        <div className="grid gap-5 mt-[140px] ">
            {/* Row1 */}
            <div className="flex">
                <div className=" rounded-2xl w-[468px] h-[324px] noise-bg overflow-hidden relative ">
                    <h6 className='text-2xs absolute '>Dive into the world of AI where design possibilities are limitless. Let the cutting-edge technology transform your concepts into breathtaking visuals.</h6>
                </div>
                <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 absolute">
                <svg className='m-auto ml-0.5 p-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" fill="currentColor"><path d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM14 9V15H10V9H5L12 2L19 9H14Z"></path></svg>
              </div>
              
                <div className=" rounded-2xl w-[712px] h-[324px] noise-bg overflow-hidden  ml-4"></div>
            </div>
           
             {/* Row2 */}
            <div className="flex ">
                <div className="rounded-2xl w-[712px] h-[324px] noise-bg overflow-hidden  mr-5"></div>
                <div className="rounded-2xl w-[468px] h-[324px] noise-bg overflow-hidden  "></div>   
            </div>
            
        </div>
    </div>
  )
}

export default Section3