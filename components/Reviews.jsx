import React from 'react'

const Reviews = () => {
  return  <>

    <div className='max-w-[1200px] m-auto mt-30 '>
         <h1 className='text-6xl font-medium w-[520px] ml-9'>Customer <span className='text-[#8b49e9]'>Success</span> Stories</h1>
         <h1 className='w-[650px] mt-3 ml-9'>Discover how our platform has helped businesses create outstanding content effortlessly. Hear directly from our users about their success and satisfaction.</h1>
    </div>
    <div className="customerCard mt-16 flex gap-7"> 
      <div className="customerCard1 w-[384px] h-[239px] noise-bg rounded-md m-auto p-3">
        <div className="flex  justify-start  items-center">
          <div className="profilepic rounded-[50%] w-[60px] h-[60px] bg-amber-300 overflow-hidden"></div>
          <h1 className='text-2xl font-medium ml-2'>John D.</h1>
         </div>
         <h1 className='ml-7 max-w-[500px] '>Using this AI-powered design assistant has completetly transformed the way i approach my projects. It's like having a professional designer on call 24/7. Highly recommend it!</h1>
      </div>
      
    </div>
  </>
}

export default Reviews