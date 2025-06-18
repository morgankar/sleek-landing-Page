

const EndingHero = () => {
  return (

  <div className="box mt-20 sm:mt-20 w-[100vw] sm:h-[640px] h-[70vh] max-w-[100vw] sm:max-w-[1200px] m-auto sm:rounded-4xl noise-bg flex relative overflow-hidden mb-20">
      <div className="textBlock w-[90vw] sm:mt-0 sm:ml-4 sm:p-5 sm:pt-35 sm:max-w-[600px]  sm:min-w-[600px] flex flex-col ">

        <div className=" sm:text-6xl sm:font-extrabold sm:leading-[70px] sm:mt-0 mt-10 leading-[50px] text-5xl font-medium w-[95vw] sm:w-[40vw]"> Start Your Design <span className='text-[#8b49e9]'>Journey </span>Today
        </div>

        <div className="para sm:max-w-[500px] w-[95vw] mt-2 text-gray-300 ">
            <h1>Sign up now and experience the power of AI-driven design without any commitment</h1>
        </div>
        
        <button className='bg-[#8f4ded] p-4 rounded-[10px] w-[40vw] sm:w-[160px] text-sm font-bold m-auto sm:m-0 sm:mt-6 mt-7 ml-0'>Remix Template</button>
      </div>
    
      <div className=" sm:w-[610px] sm:mx-174 sm:mt-20 absolute  mx-33 w-[600px] mt-65">
        <img src='/img_5.avif' className='w-[350px] sm:w-auto h-auto object-contain' alt="banner"/>
      </div>

  </div>
  )
}

export default EndingHero