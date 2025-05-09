import React from 'react'

const Marquee = () => {
  return (

    <div className='wrapper max-w-[1200px] mask-fade-right'>
        <div className="item item1"><img src="/marqueeImg/1.avif"/></div>
        <div className="item item2"><img src="/marqueeImg/2.avif"/></div>
        <div className="item item3"><img src="/marqueeImg/3.avif"/></div>
        <div className="item item4"><img src="/marqueeImg/4.avif"/></div>
        <div className="item item5"><img src="/marqueeImg/5.avif"/></div>
    </div>
  )
}

export default Marquee