import React from 'react'

const Section5 = () => {
  return (
    <div className="container sm:max-w-[1200px] sm:h-[100vh]  max-w-[90vw] m-auto p-4 mt-30">
        <h1 className='text-5xl sm:text-6xl sm:font-bold font-medium sm:max-w-[40vw]'>Stay Inspired with Our Latest <span className='text-[#8b49e9]'>Insights</span></h1>
        <h1 className='mt-4 sm:max-w-[40vw]'>Dive into our blog for the latest trends, tips, and insights in the world of design and AI technology. Whether you're looking for inspiration, tutorials, or industry news, our articles are crafted to keep you informed and inspired.</h1>

        <div className="three flex flex-col sm:flex-row sm:gap-6 mt-10 items-center justify-center">

            <div className="mt-4 sm:mt-0 noise-bg h-[350px] w-[90vw] rounded-2xl overflow-hidden flex flex-col">
                <div className='h-[70%] overflow-hidden'>
                    <img className='scale-120' src="imgA.avif" alt="img"/>
                </div>
                <div className="textbox p-2 h-[50%]">
                    <div className='flex justify-between mt-3'>
                        <h1>Apr 8,2022</h1>
                        <h1>6 min read</h1>
                    </div>
                    <h1 className='text-2xl font-medium mt-5  '>Starting a Growing a Career in Web Design</h1>
                </div>
            </div>

            {/* Card2 */}
              <div className="mt-4 sm:mt-0 noise-bg h-[350px] w-[90vw] rounded-2xl overflow-hidden flex flex-col">
                <div className='h-[70%] overflow-hidden'>
                    <img className='scale-110' src="imgB.avif" alt="img"/>
                </div>
                <div className="textbox p-2 h-[50%]">
                    <div className='flex justify-between mt-3'>
                        <h1>Mar 15,2022</h1>
                        <h1>5 min read</h1>
                    </div>
                    <h1 className='text-2xl font-medium mt-5 '>Create a Landing Page that performs Great</h1>
                </div>
            </div>

            {/* card3 */}

              <div className="mt-4 sm:mt-0 noise-bg h-[350px] w-[90vw] rounded-2xl overflow-hidden flex flex-col">
                <div className='h-[70%] overflow-hidden'>
                    <img className='scale-120' src="imgC.avif" alt="img"/>
                </div>
                <div className="textbox p-2 h-[50%]">
                    <div className='flex justify-between mt-3'>
                        <h1>Feb 28,2022</h1>
                        <h1>7 min read</h1>
                    </div>
                    <h1 className='text-2xl font-medium mt-5 '>How Can Designers Prepare for the future?</h1>
                </div>
            </div>

        </div>

         <div className="cta mt-6 text-sm font-bold text-center ">
            <button className='bg-[#8f4ded] p-3 rounded-[10px] sm:max-w-[230px]'>Read More</button>
        </div>
        

    </div>
  )
}

export default Section5