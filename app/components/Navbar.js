import Image from 'next/image'
import React from 'react'
import Avatar from "@/public/images/avatar.png"
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='bg-royal-purple w-full h-20 flex flex-row justify-around items-center text-white '>
        <div>
            <h3 className='text-[#f3cbb2] font-bold text-3xl'><Link href="/">MK</Link></h3>
        </div>
        <div >
            <ul className='flex max-sm:hidden flex-row  gap-10 uppercase text-lg font-light'>
                <li><Link href="/bot">resume ai chatbot</Link> </li>
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