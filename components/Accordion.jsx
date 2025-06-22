import { useState } from "react"


const Accordion = () => {

      const title='How does the AI generate designs?'
        const content= 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, autem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta totam nisi excepturi magni eius mollitia voluptas! Natus quod, tempora eveniet tenetur facilis ad et veniam maiores minus? Quo, ex pariatur inventore voluptates ut nihil neque quod mollitia placeat voluptatem vel.'
 
// states    
const [open,setOpen ] = useState(false);

  return (
    
    <>
    <div className=" overflow-hidden transition-all duration-500 ease-in-out">
        <h1 onClick={()=> setOpen(!open)}>{title}</h1>
        {open && <p className="mt-2 ">{content}</p>}
    </div>
    </>
  )
}

export default Accordion;