
import Image from 'next/image'
import Robot from "@/public/images/robot.png"
import Mouse from "@/public/images/mouse.png"
import Facebook from "@/public/icons/facebook.svg"
import Instagram from "@/public/icons/instagram.svg"
import Linkedin from "@/public/icons/linkedin.png"

import Reveal from '@/components/untlis/Reveal'
import { RevealWrapper } from 'next-reveal'
import Link from 'next/link'


const Hero = () => {
  return (
   <section className='bg-purple sm:h-[90vh] flex flex-col  justify-center items-center pattern relative overflow-hidden -z-10 '>
    <div className='flex flex-col gap-4 items-center text-white max-sm:mt-10'>
        <h3 className='text-xl font-light text-[#ecdbee]'>Software Engineer</h3>
        <h1 className='font-bold text-5xl'>MK Portfolio</h1>
        <p className='font-light w-[80%] text-lg sm:text-xl text-center'>I have created a fun way for you to learn about developmental experience as well as interests.</p>
        <Link href="/bot" className='rounded-full border-x-2 hover:border-0 hover:bg-royal-purple px-10 py-4 font-bold text-lg mt-4'>Let chat with us</Link>
        <Image src={Mouse} alt="mouse icon" className='mt-10 animate-bounce ' height={50}/>
    </div>

            
       
            <Image src={Robot} width={600} height={500} alt='robot image ' className='sm:absolute bottom-0 left-20 reveal-image'/>

          
            
          

            <div className=' flex max-sm:hidden flex-row gap-2  absolute bottom-16 right-24'>
                <div className='bg-white rounded-full p-4 hover:bg-royal-purple flex justify-center items-center w-12 h-12'><Image src={Facebook} alt='facebook icon '/></div>
                <div className='bg-royal-purple rounded-full p-4 flex justify-center items-center w-12 h-12'><Image src={Instagram} alt='facebook icon '/></div>
                <div className='bg-white rounded-full p-4 hover:bg-royal-purple flex justify-center items-center w-12 h-12'><Image src={Linkedin} alt='facebook icon '/></div>


            </div>
        
    
   </section>
  )
}

export default Hero