import { Avatar,AvatarImage } from '@/components/ui/avatar'
import  AvatarImg   from '@/public/images/avatar.png'
import  Chat   from '@/public/icons/chat-bubble.png'
import Image from 'next/image'
import ChatHistory from '@/components/ui/chatHistory'
import ChatBox from '@/components/ui/ChatBox'
import Media from '@/components/ui/Media'
const page = () => {
  return (
    <section className='flex flex-row w-[100%]'>

        <div className='basis-1/12 bg-purple  w-20 flex flex-col items-center pt-10 border-r-2'>
            <Image src={AvatarImg} width={50} />
            <div className='mt-20 hover:bg-[#a05faa] hover:border-r-2 w-full flex items-center justify-center py-4 box-border'>
                <Image src={Chat}/>
            </div>
        </div>

        <div className='basis-2/12'>
            <ChatHistory/>
        </div>

        <div className='basis-7/12'>
            <ChatBox/>
        </div>
        <div className='basis-1/12'>
            <Media/>
        </div>
    </section>
  )
}

export default page