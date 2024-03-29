import Image from "next/image"
import  Pencil   from '@/public/icons/pencil.svg'
import  Notifictaion   from '@/public/icons/notification.svg'

const ChatHistory = () => {
  return (
    <div className="bg-purple h-full max-sm:absolute max-sm:w-full z-20">
      <div className="text-white flex flex-row items-center  gap-10 py-8 px-10">
        <h3 className="text-2xl font-bold ">Message</h3>
        <Image src={Pencil} />
      </div>

      <div className="text-white px-10">
        <h3 className="font-light text-base uppercase mb-10">last 7 days</h3>
        <ul className="text-xs pl-2 flex flex-col  gap-10">

          <li className="flex flex-row gap-2 items-center">
            <Image src={Notifictaion }/>
            <p>English tutorial for...</p>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <Image src={Notifictaion }/>
            <p>LittleCommerce analyze...</p>
          </li>
          <li className="flex flex-row gap-2 items-center">
            <Image src={Notifictaion }/>
            <p>English tutorial</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ChatHistory