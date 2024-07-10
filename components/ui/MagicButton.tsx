import React from 'react'

const MagicButton = ({
  title,icon, position, handleClick, otherClasses
}:{title:string,icon:React.ReactNode, position:string, handleClick?:()=>void, otherClasses?:string}) => {
  return (
<button className="p-[1px] relative inline-block md:mt-10  overflow-hidden" onClick={handleClick}>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg " />
  <div className={`inline-flex w-full gap-3 items-center justify-center px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>

      {position==='left' && icon}
      {title}
      {position==='right' && icon}
      </div>

</button>
  )
}

export default MagicButton

  
 
