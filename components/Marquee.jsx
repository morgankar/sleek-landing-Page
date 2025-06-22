import { motion } from "motion/react"



const Marquee = () => {
  return (

    <motion.div 
     initial = {{opacity: 0}}
      animate={{opacity: 100}}
      transition={{ duration: 3 }}
    className='wrapper sm:max-w-[1200px] mask-fade-right'>
        <div className="item sm:w-[200px] sm:left-[110%] w-[180px] left-[250%] item1"><img src="/marqueeImg/1.avif"/></div>
        <div className="item sm:w-[200px] sm:left-[110%] w-[180px] left-[250%] item2"><img src="/marqueeImg/2.avif"/></div>
        <div className="item sm:w-[200px] sm:left-[110%] w-[180px] left-[250%] item3"><img src="/marqueeImg/3.avif"/></div>
        <div className="item sm:w-[200px] sm:left-[110%] w-[180px] left-[250%] item4"><img src="/marqueeImg/4.avif"/></div>
        <div className="item sm:w-[200px] sm:left-[110%] w-[180px] left-[250%] item5"><img src="/marqueeImg/5.avif"/></div>
    </motion.div>
  )
}

export default Marquee