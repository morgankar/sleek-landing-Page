import React from 'react'

const Hero = () => {
  return (

    <div className="box bg-[#272829]
     w-[90vw] h-[58vh] 
     max-w-[1200px]
     m-auto rounded-4xl mt-18
     noise-bg
     overflow-hidden
     flex
     relative
     ">
      <div className="textBlock ml-4
      w-[50vw] 
      mt-4
      p-5 pt-35
      max-w-[600px]
      min-w-[600px]
      flex flex-col
      mobile-W
      ">
        <div className="heading text-6xl font-extrabold leading-[70px]">
        Your AI-Powered <span className='text-[#8b49e9]'>Design</span> Assistant
        </div>
        <div className="para pt-3 max-w-[500px]">
        Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.
        </div>
        <div className="cta mt-6 text-sm font-bold">
          <button className='bg-[#8f4ded] p-4 rounded-[10px]'>Remix Template</button>
          <button className='p-4 rounded-[10px] font-regular'>More Templates</button>
        </div>
      </div>
      <div className="image
      contain
      w-[610px]
      mx-160 mt-10
      absolute 
      ">
        <img src='/img_1.avif' className='' alt="banner"/>
        
      </div>
    </div>
  )
}

export default Hero