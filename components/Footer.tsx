import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Footer = () => {
  return (
    <footer className='w-full mb-[80px] md:mb-5  pb-20' id='contact'>
         
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'> Ready to take your   digital presence to the
            <span className='text-purple'>next level?</span></h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you to achieve your goals.</p>
            <a href="mailto:karkiprakash049@gmail.com">
                <MagicButton title="let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'/>
            </a>

        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-md md:font-normal font-light'>Copyright &copy; 2024 Prakash</p>
            <div className='flex items-center md:gap-3 gap-6 mt-3'>
                {socialMedia.map((profile)=>(
                <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter 
                backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' key={profile.id}>
                    <img src={profile.img} alt='social icons' width={20} height={20}/>
                </div>
                ))}

            </div>
        </div>


    </footer>
   
  )
}

export default Footer
