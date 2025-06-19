import { motion } from 'motion/react'
import  { useState } from 'react'
motion

const Plan = () => {

    const [on, setOn] = useState(false)
  return (
    <div className="container w-[90vw] lg:max-w-[1200px] m-auto lg:h-[100vh]">
        <div className="header mt-30 lg:mt-70 ">
            <h1 className='lg:text-5xl lg:font-bold font-medium  leading-[50px] lg:max-w-[640px] text-5xl w-[90vw]  relative '>Affordable Plans for <span className='text-[#8b49e9]'>Every Need</span></h1>
            <h1 className='absolute lg:max-w-[36vw] w-[90vw] mt-[15px]'>Choose the perfect plan for your design projects, from startups to enterprises. Our pricing tiers are designed to offer flexibility and value, ensuring you get the most out of our AI-powered design assistant.</h1>
        </div>
        <div className="btns flex justify-center mt-[180px] lg:mt-[120px] ">
            <span className={`${on ? "text-gray-400": "text-white" } mr-2 flex items-center p-2`}>Monthly</span>
            <button onClick={() => setOn(!on)} className="cursor-pointer p-1 w-[90px] rounded-3xl bg-[#8b49e9] ">
                <motion.div 
                animate = {{x: on? 50: 0}}
                className='w-8 h-8 bg-white rounded-full'>

                </motion.div>
            </button>
            <span className={`${on ? "text-white":"text-gray-400" } ml-2 flex items-center p-2`}>Yearly</span>
        </div>

        <div className="cards flex lg:flex-row flex-col items-center gap-4 mt-6 ">
            {/* card1 */}
            <div className="rounded-2xl lg:w-[387px] lg:h-[520px] noise-bg overflow-hidden relative w-[90vw] sm:w-[80vw] m-auto  ">
                <div className="content p-4">
                    <h1 className='text-sm text-gray-300'>FREE</h1>
                    <h1 className='text-4xl font-bold mt-3'>$0/m</h1>
                    <h1 className='text-gray-300 mt-1'>Free forever</h1>
                    <div className="w-[98%] h-px bg-white opacity-20 mt-6 mb-5 mx-auto"></div>

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
            <div className="rounded-2xl lg:w-[387px] lg:h-[520px] bg-[#8b49e9] overflow-hidden relative w-[90vw] sm:w-[80vw] m-auto">
            <div className="content p-4">
                    <h1 className='text-sm text-gray-300'>BASIC</h1>
                    <h1 className='text-4xl font-bold mt-3'>{on? "$11.93": "$14.99" }/m</h1>
                    <h1 className='text-gray-300 mt-1'> { on? "Billed yearly":"Billed monthly"  }</h1>
                   <div className="w-[98%] h-px bg-white opacity-20 mt-6 mb-5 mx-auto"></div>
                    <ul>
                        <li className='mb-3'><span>✔️</span> Advanced AI-generated designs</li>
                        <li className='mb-3'><span>✔️</span>Full access to customization tools</li>
                        <li className='mb-3'><span>✔️</span> Premium templates library</li>
                        <li className='mb-3'><span>✔️</span> Real-time collaboration</li>
                        <li className='mb-3'><span>✔️</span> Priority email support</li>
                        <li className='mb-3'><span>✔️</span> Unlimited Projects</li>
                        
                    </ul>

                    <button className='w-full bg-amber-50 text-black mt-[88px] p-2 rounded-md font-bold text-sm '>Remix Template</button>
                    
                </div>
            </div>


            {/* card3 */}
            <div className=" rounded-2xl lg:w-[387px] lg:h-[520px] noise-bg overflow-hidden relative w-[90vw] m-auto sm:w-[80vw] ">
            <div className="content p-4">
                    <h1 className='text-sm text-gray-300'>PRO</h1>
                    <h1 className='text-4xl font-bold mt-3'>{on? "$24.93": "$29.99" }/m</h1>
                    <h1 className='text-gray-300 mt-1'>
                    { on? "Billed yearly":"Billed monthly"  }</h1>
                     <div className="w-[98%] h-px bg-white opacity-20 mt-6 mb-5 mx-auto"></div>
    
                    <ul>
                        <li className='mb-3'><span>✔️</span>All features included in Pro Plan</li>
                        <li className='mb-3'><span>✔️</span> Dedicated account manager</li>
                        <li className='mb-3'><span>✔️</span> Custom AI solutions and designs</li>
                        <li className='mb-3'><span>✔️</span> Onboarding and training sessions</li>
                        <li className='mb-3'><span>✔️</span> 24/7 priority support</li>
                        <li className='mb-3'><span>✔️</span> Advanced analytics and reporting</li>
                        <li className='mb-3'><span>✔️</span> Secure cloud storage</li>
                    </ul>

                    <button className='w-full border border-violet-500 text-[#8f4ded] mt-[50px] p-2 rounded-md font-bold text-sm'>Remix Template</button>
                    
                </div>
            </div>
        </div>
       


    </div>
  )
}

export default Plan