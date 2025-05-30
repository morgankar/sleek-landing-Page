import React from 'react'

const Faq = () => {

    const accordionData = {
        title: 'How does the AI generate designs?',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta totam nisi excepturi magni eius mollitia voluptas! Natus quod, tempora eveniet tenetur facilis ad et veniam maiores minus? Quo, ex pariatur inventore voluptates ut nihil neque quod mollitia placeat voluptatem vel.'
    };

    const {title, content} = accordionData;

  return (
    <>  <div className='mt-15 sm:max-w-[1200px] m-auto max-w-[90vw] rounded-md noise-bg p-4'>
        <h1 className='text-5xl'>Frequently Asked <span className='text-[#8b49e9]'>Questions</span> </h1>
        <h1 className='mt-6'>Have questions about our AI-Powered Design Assistant? Find answers to the most common questions and learn how our platform can enhance your creative process.</h1>
        
        <div className="accordion border-2 mt-8">
            <div className="accordion-item">
                <div className="accordion-title font-bold">{title}</div>
                <div className="accordion-content">{content}</div>
            </div>
        </div>
        
    </div>
        
    </>
  )
}

export default Faq