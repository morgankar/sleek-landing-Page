import React from 'react'

const Section3 = () => {
  return (
    <div className="container max-w-[1200px] h-[100vh] m-auto">
        <div className="max-w-[500px]">
            <h1 className='text-5xl font-bold leading-[70px]'>Transforming Imagination into Reality</h1>
            <h2>Unlock the full potential of your creativity with our AI-powered design assistant. Explore new dimensions of design, from futuristic visuals to timeless craftsmanship, and witness how AI can turn your wildest ideas into stunning realities.</h2>
        </div>
        <div className="grid gap-5">
            {/* Row1 */}
            <div className="grid grid-cols-[30%_70%] max-w-full mt-18">
                <div className=" rounded-2xl h-[324px] noise-bg overflow-hidden "></div>
                <div className=" rounded-2xl h-[324px] noise-bg overflow-hidden  ml-4"></div>
            </div>
           
             {/* Row2 */}
            <div className="grid grid-cols-[70%_30%] max-w-full ">
                <div className="rounded-2xl h-[324px] noise-bg overflow-hidden  mr-5"></div>
                <div className="rounded-2xl h-[324px] noise-bg overflow-hidden  "></div>   
            </div>
            
        </div>
    </div>
  )
}

export default Section3