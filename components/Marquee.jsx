import React from 'react'

const Marquee = () => {
  return (

    <div className='wrapper sm:max-w-[1200px] mask-fade-right'>
        <div className="item sm:w-[200px] sm:left-[150%] w-[180px] left-[250%] item1"><img src="/marqueeImg/1.avif"/></div>
        <div className="item sm:w-[200px] sm:left-[150%] w-[180px] left-[250%] item2"><img src="/marqueeImg/2.avif"/></div>
        <div className="item sm:w-[200px] sm:left-[150%] w-[180px] left-[250%] item3"><img src="/marqueeImg/3.avif"/></div>
        <div className="item sm:w-[200px] sm:left-[150%] w-[180px] left-[250%] item4"><img src="/marqueeImg/4.avif"/></div>
        <div className="item sm:w-[200px] sm:left-[150%] w-[180px] left-[250%] item5"><img src="/marqueeImg/5.avif"/></div>
    </div>
  )
}

export default Marquee