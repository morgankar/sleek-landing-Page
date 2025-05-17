import React from 'react'

const Plan = () => {
  return (
    <div className="container w-[90vw] max-w-[1200px] m-auto h-[100vh]">
        <div className="header mt-30">
            <h1 className='text-5xl font-bold leading-[50px] max-w-[32vw] relative'>Affordable Plans for <span className='text-[#8b49e9]'>Every Need</span></h1>
            <h1 className='absolute max-w-[36vw] mt-[15px]'>Choose the perfect plan for your design projects, from startups to enterprises. Our pricing tiers are designed to offer flexibility and value, ensuring you get the most out of our AI-powered design assistant.</h1>
        </div>
        <div className="btns flex justify-center mt-[120px]">
            <button className=' bg-violet-500 p-1 rounded-3xl'>Toggle</button>
        </div>

        <div className="cards flex gap-4 mt-6">
            {/* card1 */}
            <div className=" rounded-2xl w-[387px] h-[520px] noise-bg overflow-hidden relative ">
                <div className="content p-4">
                    <h1 className='text-sm text-gray-300'>FREE</h1>
                    <h1 className='text-4xl font-bold mt-3'>$0/m</h1>
                    <h1 className='text-gray-300 mt-1'>Free forever</h1>
                    <div className="w-[98%] h-px bg-gray-300 mt-6 mb-5 mx-auto"></div>

                    <ul>
                        <li className='mb-3'><span>✔️</span> Basic AI-generated designs</li>
                        <li className='mb-3'><span>✔️</span> Access to customization tools</li>
                        <li className='mb-3'><span>✔️</span> Standard templates library</li>
                        <li className='mb-3'><span>✔️</span> 5 projects per month</li>
                    </ul>

                    <button className='w-full border border-violet-500 text-[#8f4ded] mt-40 p-2 rounded-md font-bold text-sm'>Remix Template</button>
                    
                </div>
            </div>
            {/* card2 */}
            <div className=" rounded-2xl w-[387px] h-[520px] noise-bg overflow-hidden relative ">
            <div className="content p-4">
                    <h1 className='text-sm text-gray-300'>FREE</h1>
                    <h1 className='text-4xl font-bold mt-3'>$0/m</h1>
                    <h1 className='text-gray-300 mt-1'>Free forever</h1>
                    <div className="w-[98%] h-px bg-gray-300 mt-6 mb-5 mx-auto"></div>

                    <ul>
                        <li className='mb-3'><span>✔️</span> Basic AI-generated designs</li>
                        <li className='mb-3'><span>✔️</span> Access to customization tools</li>
                        <li className='mb-3'><span>✔️</span> Standard templates library</li>
                        <li className='mb-3'><span>✔️</span> 5 projects per month</li>
                    </ul>

                    <button className='w-full border border-violet-500 text-[#8f4ded] mt-40 p-2 rounded-md font-bold text-sm'>Remix Template</button>
                    
                </div>
            </div>
            {/* card3 */}
            <div className=" rounded-2xl w-[387px] h-[520px] noise-bg overflow-hidden relative ">
            <div className="content p-4">
                    <h1 className='text-sm text-gray-300'>FREE</h1>
                    <h1 className='text-4xl font-bold mt-3'>$0/m</h1>
                    <h1 className='text-gray-300 mt-1'>Free forever</h1>
                    <div className="w-[98%] h-px bg-gray-300 mt-6 mb-5 mx-auto"></div>

                    <ul>
                        <li className='mb-3'><span>✔️</span> Basic AI-generated designs</li>
                        <li className='mb-3'><span>✔️</span> Access to customization tools</li>
                        <li className='mb-3'><span>✔️</span> Standard templates library</li>
                        <li className='mb-3'><span>✔️</span> 5 projects per month</li>
                    </ul>

                    <button className='w-full border border-violet-500 text-[#8f4ded] mt-40 p-2 rounded-md font-bold text-sm'>Remix Template</button>
                    
                </div>
            </div>
        </div>
       


    </div>
  )
}

export default Plan