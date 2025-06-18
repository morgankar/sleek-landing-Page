import { useState } from "react";
import { motion } from "motion/react";

const Faq = () => {
    const accordionData = [
        {
            title: 'How does the AI generate designs?',
            content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maiores earum possimus deleniti aspernatur expedita voluptas reprehenderit dolore at minima sapiente, veniam, dicta laborum! Natus similique modi, asperiores nobis ducimus dolore fugit exercitationem iusto ut eum saepe unde! Perspiciatis, provident.'
        },
        {
            title: 'Can I customize the AI-generated designs?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus similique modi, asperiores nobis ducimus dolore fugit exercitationem iusto ut eum saepe unde! Perspiciatis, provident.'
        },
        {
            title: 'What support options are available?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. aspernatur expedita voluptas reprehenderit dolore at minima sapiente, veniam, dicta laborum! Natus similique modi, asperiores nobis ducimus dolore fugit exercitationem iusto ut eum saepe unde! Perspiciatis, provident.'
        },
        {
            title: 'Is there a free trial available?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maiores earum possimus deleniti aspernatur expedita voluptas reprehenderit dolore at minima sapiente, veniam, dicta laborum! , provident.'
        },
        {
            title: 'How secure is my data?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maiores earum possimus deleniti aspernatur expedita voluptas reprehenderit  fugit exercitationem iusto ut eum saepe unde! Perspiciatis, provident.'
        },
        {
            title: 'What integrations are available?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  eum saepe unde! Perspiciatis, provident.'
        },
    ];

    const [activeId, setActiveId] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = (index) => {
        setActiveId(activeId === index ? null : index);
    };

    return (
        <>  
        <div className='mt-30 sm:max-w-[1200px] m-auto max-w-[90vw] rounded-3xl  p-4 flex flex-col sm:flex-row sm:justify-between items-center sm:min-h-[446px] noise-bg-pointer '>
            <div>
                <h1 className='sm:text-6xl text-5xl font-medium sm:w-[520px] w-[95vw] sm:ml-9 mt-8 '>
                    Frequently Asked <span className='text-[#8b49e9]'>Questions</span> 
                </h1>
                <h1 className='mt-6 sm:w-[500px] sm:ml-9 w-[95vw]'>
                    Have questions about our AI-Powered Design Assistant? Find answers to the most common questions and learn how our platform can enhance your creative process.
                </h1>
            </div>
           
            <div className="mt-8 w-[505px] group">
                {accordionData.map((item, index) => 
                    <div key={index} className=" mb-8">
                        <button 
                            className="font-extrabold w-full text-left bg-transparent border-none p-0 cursor-pointer" 
                            onClick={() => handleToggle(index)}
                        >
                            <div className="flex justify-between">
                            {item.title} 
                            <motion.svg 
                            initial = {{rotate: 180}}
                            animate={{rotate: activeId === index ? 180:0}}
                            transition={{duration: 0.5}}
                            className="w-5 h-5 mr-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path></motion.svg>
                            </div>
                        </button>

                        {activeId === index && (
                            <motion.div 
                            initial = {{height:0,opacity:0}}
                            animate ={ {height:"auto", opacity:1} }
                            transition={{duration:0.3, ease: "easeInOut"}}
                            className=" max-w-[505px] mt-2 mb-2">
                                {item.content}
                            </motion.div>
                        )}
                        <div className="w-[98%] h-px bg-white opacity-20 mt-6 mb-5 mx-auto"></div>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default Faq