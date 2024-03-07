import Image from "next/image"
import Folder from "@/public/icons/folder.svg"
import Image2  from "@/public/images/IMG.png"
const Media = () => {
  return (
    <section>
        <div>
            <div className='h-28  w-full flex justify-center items-center border-b '>
                <h3 className='font-bold text-2xl '>Media</h3>
            </div>

            <div className="p-4">
                <div className="flex flex-row gap-4">
                    <Image src={Folder} />
                    <p className="font-semibold">Media</p>
                </div>
                <Image src={Image2} className="mt-6 px-4" alt="codding image"/>
            </div>
        </div>
    </section>
  )
}

export default Media