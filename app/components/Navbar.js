import Image from 'next/image'
import React from 'react'
import Avatar from "@/public/images/avatar.png"
const Navbar = () => {
  return (
    <header className='bg-royal-purple w-full h-20 flex flex-row justify-around items-center text-white '>
        <div>
            <h3 className='text-[#f3cbb2] font-bold text-3xl'>MK</h3>
        </div>
        <div>
            <ul className='flex flex-row  gap-10 uppercase text-lg font-light'>
                <li>resume ai chatbot</li>
                <li>resume </li>
                <li>portfolio</li>
                <li>interest</li>
            </ul>
        </div>
        <div >
        <Image src={Avatar} height={60}/>
        </div>
    
    </header>
  )
}

export default Navbar