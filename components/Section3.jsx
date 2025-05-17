import React from 'react'

const Section3 = () => {
  return (
    <>
    <div className="container max-w-[1200px] h-[100vh] m-auto">
        
            <h1 className='text-5xl font-bold leading-[50px] max-w-[32vw]'>Transforming Imagination into <span className='text-[#8b49e9] relative'>Reality</span></h1>
            <h2 className='absolute max-w-[36vw] mt-[15px]'>Unlock the full potential of your creativity with our AI-powered design assistant. Explore new dimensions of design, from futuristic visuals to timeless craftsmanship, and witness how AI can turn your wildest ideas into stunning realities.</h2>
        
        <div className="grid gap-5 mt-[140px] ">
            {/* Row1 */}
            <div className="flex">
                <div className=" rounded-2xl w-[468px] h-[324px] noise-bg overflow-hidden relative ">
                  <div className="blck flex justify-between">
                    <h6 className='text-sm ml-5 mt-5 w-90 leading-5 font-medium'>Dive into the world of AI where design possibilities are limitless. Let the cutting-edge technology transform your concepts into breathtaking visuals.</h6>
                    <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 ">
                    <svg className='pl-2 mt-1.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path></svg>
                  </div>

                  </div>
                  <h1 className='text-4xl absolute bottom-5 left-4 font-bold'>Witness The Future</h1>
                   
                </div>
                
               
                <div className=" rounded-2xl w-[712px] h-[324px] noise-bg overflow-hidden  ml-4 relative">
                  <div className="blck flex justify-between">
                    <h6 className='text-sm ml-5 mt-5 w-110 leading-5 font-medium'>Step beyond the ordinary with designs that defy conventions. Our AI conjures up imaginative visuals that push the boundaries of creativity.</h6>
                    <div className="secIcon rounded-[50%] w-[50px] h-[50px] bg-[#8f4ded]  m-5 ">
                    <svg className='pl-2 mt-1.5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path></svg>
                    </div>

                  </div>
                  <h1 className='text-4xl absolute bottom-5 left-4 font-bold'>Visualize the Impossible</h1>
                </div>
                </div>
            </div>
           
             {/* Row2 */}
            <div className="flex mt-5">
                <div className="rounded-2xl w-[712px] h-[324px] noise-bg overflow-hidden  mr-5"></div>
                <div className="rounded-2xl w-[468px] h-[324px] noise-bg overflow-hidden  "></div>   
            </div>
            
    </div>
        
    
  </>
)
}

export default Section3