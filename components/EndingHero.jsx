const EndingHero = () => {
  return (

  <div className="box mt-20 lg:mt-20 w-[100vw] lg:h-[640px] h-[70vh] max-w-[100vw] lg:max-w-[1200px] m-auto lg:rounded-4xl noise-bg flex relative overflow-hidden mb-20">
      <div className="textBlock w-[90vw] lg:mt-0 lg:ml-4 lg:p-5 lg:pt-35 lg:max-w-[600px]  lg:min-w-[600px] flex flex-col ">

        <div className=" lg:text-6xl lg:font-extrabold lg:leading-[70px] lg:mt-0 mt-10 leading-[50px] text-5xl font-medium w-[95vw] lg:w-[40vw]"> Start Your Design <span className='text-[#8b49e9]'>Journey </span>Today
        </div>

        <div className="para lg:max-w-[500px] w-[95vw] mt-2 text-gray-300 ">
            <h1>Sign up now and experience the power of AI-driven design without any commitment</h1>
        </div>
        
        <button className='bg-[#8f4ded] p-4 rounded-[10px] w-[40vw] lg:w-[160px] text-sm font-bold m-auto lg:m-0 lg:mt-6 mt-7 ml-0'>Remix Template</button>
      </div>
    
      <div className=" lg:w-[610px] lg:mx-174 lg:mt-20 absolute  mx-33 w-[600px] mt-65">
        <img src='/img_5.avif' className='w-[350px] lg:w-auto h-auto object-contain' alt="banner"/>
      </div>

  </div>
  )
}

export default EndingHero