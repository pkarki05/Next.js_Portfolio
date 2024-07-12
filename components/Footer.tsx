import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Footer = () => {
  return (
    <footer className='w-full mb-[80px] md:mb-5  pb-20' id='contact'>
         
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'> Ready to contribute to achieve a
             <span className='text-purple'> common goal.</span></h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Feel free to reach out to me via email at <a href="mailto:your-email@example.com" className="text-purple">karkiprakash049@gmail.com</a>  /or</p>
            <a href="/Resume_IT.pdf" download >
                <MagicButton title="Download my CV"
                icon={<FaLocationArrow/>}
                position='right'/>
            </a>

        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-md md:font-normal font-light'>Copyright &copy; 2024 Prakash</p>
            <div className='flex items-center md:gap-3 gap-6 mt-3'>
                {socialMedia.map((profile)=>(
                <a className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter 
                backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' 
                key={profile.id} href={profile.link} target='_blank'>
                    <img src={profile.img} alt='social icons' width={20} height={20}/>
                </a>
                ))}

            </div>
        </div>


    </footer>
   
  )
}

export default Footer
