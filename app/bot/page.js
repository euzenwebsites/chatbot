"use client"
import { Avatar,AvatarImage } from '@/components/ui/avatar'
import  AvatarImg   from '@/public/images/avatar.png'
import  Chat   from '@/public/icons/chat-bubble.png'
import  Logout   from '@/public/icons/logout.svg'
import Image from 'next/image'
import ChatHistory from '@/components/ui/chatHistory'
import ChatBox from '@/components/ui/ChatBox'
import ArrowLeft from '@/public/icons/arrow-left.png'
import ArrowRight from '@/public/icons/arrow-right.png'
import Media from '@/components/ui/Media'
import { useState } from 'react'
import Link from 'next/link'
const page = () => {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleRevealClick = () => {
      setIsRevealed(!isRevealed);
    };

  return (
    <section className='flex flex-row w-[100%]'>

        <div className='w-[20%] sm:w-[8%] bg-purple   flex flex-col  justify-between pt-10 border-r-2'>

            <div className='flex flex-col items-center'>
            <Image src={AvatarImg} width={50} />
            <div className='mt-20  hover:bg-[#a05faa] hover:border-r-2 w-full flex items-center justify-center gap-4 py-4 box-border'
             onClick={handleRevealClick}>

                <Image src={Chat} />
                {!isRevealed && (<Image src={ArrowLeft}/>)}
                {isRevealed && (<Image src={ArrowRight}/>)}
            </div>
            
            </div>
            <div className='flex justify-center items-center mb-10'>
            <Link href="/"><Image src={Logout}/></Link>
            </div>
        </div>
        {isRevealed && (
        <div className="sm:w-[25%]">
            <ChatHistory/>
        </div>
        )}

        <div className='max-sm:w-[80%]'>
            <ChatBox/>
        </div>
        <div className='sm:w-[25%] max-sm:hidden'>
            <Media/>
        </div>
    </section>
  )
}

export default page