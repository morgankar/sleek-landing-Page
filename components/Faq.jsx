
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

    const {title, content} = accordionData;

  return (
    <>  
    <div className='mt-15  sm:max-w-[1200px] m-auto max-w-[90vw] rounded-3xl  noise-bg p-4 flex flex-col sm:flex-row sm:justify-between items-center sm:min-h-[446px]'>
        <div>
             <h1 className='sm:text-6xl text-5xl font-medium sm:w-[520px] w-[95vw] sm:ml-9 mt-8 '>Frequently Asked <span className='text-[#8b49e9]'>Questions</span> </h1>
             <h1 className='mt-6 sm:w-[500px] sm:ml-9  w-[95vw]'>Have questions about our AI-Powered Design Assistant? Find answers to the most common questions and learn how our platform can enhance your creative process.</h1>
        </div>
       
        
        <div className="accordion  mt-8 border ">
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