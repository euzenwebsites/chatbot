"use client"
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import Avatar from "@/public/images/avatar.png"
import Menu from "@/public/icons/menu.svg"
import Link from 'next/link'
const Navbar = () => {
  const [isRevealed, setIsRevealed] = useState(false);


    const handleRevealClick = () => {
      setIsRevealed(!isRevealed);
    };

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
        <div className='max-sm:hidden' >
        <Image src={Avatar} height={60}/>
        </div>
        <div className='sm:hidden'>
          <Image src={Menu} height={30} onClick={handleRevealClick}/>
        </div>

        {isRevealed && (
        <div className="h-[50%] w-[100%]  absolute top-20 z-1000 flex justify-center  bg-royal-purple ">
           <ul className='h-full  flex flex-col gap-6 uppercase text-xl font-normal mt-10 text-center '>
                <li><Link href="/bot">resume ai chatbot</Link> </li>
                <li>resume </li>
                <li>portfolio</li>
                <li>interest</li>
            </ul>
        </div>
        )}

    
    </header>
  )
}

export default Navbar