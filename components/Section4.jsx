import React from 'react'

const Section4 = () => {
  return (
    <div className='sm:max-w-[1200px] max-w-[90vw] m-auto rounded-3xl mt-18
     noise-bg overflow-hidden w-[90vw] h-[460px] flex sm:items-center p-2 border-2'>
        <div className="txtblock sm:ml-9 m-auto ">
            <h1 className='sm:text-6xl text-5xl font-medium sm:w-[390px] w-[90vw] '>Seamless Tool <span className='text-[#8b49e9]'>Integration</span></h1>
            <h1 className='sm:w-[450px] w-[80vw] mt-3'>HelixAI offers seamless integration with a variety of popular design and project management tools, ensuring a smooth and efficient workflow.</h1>
        </div>
        <div className="sm:w-[40vw] sm:h-[450px] mx-auto  w-[20vw] h-[20vh]">
          <div className="itemIcon item1"><img src="/marqueeImg/a.avif"/></div>
          <div className="itemIcon item2"><img src="/marqueeImg/b.avif"/></div>
          <div className="itemIcon item3"><img src="/marqueeImg/c.avif"/></div>
          <div className="itemIcon item4"><img src="/marqueeImg/d.avif"/></div>
          <div className="itemIcon item5"><img src="/marqueeImg/e.avif"/></div>
         
        </div>
     </div>
  )
}

export default Section4