import Image from "next/image"
import  Logo   from '@/public/icons/logo.svg'
import  Video   from '@/public/icons/video.svg'
import  SlideBar   from '@/public/icons/sidebar.svg'
import  More  from '@/public/icons/more.svg'
import  dots  from '@/public/icons/dots.svg'
import  Pause  from '@/public/icons/pause.svg'
import  Smile  from '@/public/icons/smile.svg'
import  Attach  from '@/public/icons/attach.svg'
import  Location  from '@/public/icons/location.svg'


const ChatBox = () => {
  return (
    <section className="w-full">   
        <div >
            <div className="flex flex-row items-between max-sm: gap-10  justify-between p-8 bg-[#ffffff] j-h-20 sm:h-28 ">
                
                <div className="flex flex-row gap-4">
                    <Image src={Logo} />
                    <div>
                        <h3 className="font-bold text-lg sm:text-xl">MK AI</h3>
                        <p className="text-xs sm:text-base">Generating...</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2">
                    <Image src={Video}/>
                    <Image src={SlideBar}/>
                    <Image src={More}/>

                </div>
            </div>

            <div className="bg-[#f7f7f7] grid gap-8 sm:gap-4  justify-items-stretch h-full p-6 rounded-xl ">

                <div className="w-[90%] sm:w-[70%] justify-self-end">
                    <p className="text-right text-lightgrey">10:30 AM</p>
                    <div className="text-white bg-[#c15399] p-4 new-border ">
                        <p>Write code for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons,
                             cancel and send, then run test with my Codepen project.</p>
                    </div>
                </div>

                <div className="w-[90%] sm:w-[70%] justify-self-start">
                    <div className="flex flex-row gap-4">
                        <p className="font-semibold ">MK AI</p>
                    <p className="text-left text-lightgrey">10:30 AM</p>

                    </div>
                    <div className=" bg-[#eaeaea] p-4 new-border2">
                        <p>Write code for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons,
                             cancel and send, then run test with my Codepen project.</p>
                    </div>
                </div>

                <div className="w-[90%] sm:w-[70%] justify-self-end">
                    <p className="text-right text-lightgrey">10:30 AM</p>
                    <div className="text-white bg-[#c15399] p-4 new-border">
                        <p>Write code for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons,
                             cancel and send, then run test with my Codepen project.</p>
                    </div>
                </div>

                <div className="w-[90%] sm:w-[70%] justify-self-start">
                    <div className="flex flex-row gap-4">
                        <p className="font-semibold ">MK AI</p>
                    <p className="text-left text-lightgrey">10:30 AM</p>

                    </div>
                    <div className=" bg-[#eaeaea] px-4 py-8 new-border2">
                       <Image src={dots}/>
                    </div>
                </div>
                
                <div className="bg-[#e8ecef] flex flex-row gap-4 justify-self-center rounded-lg p-[2px] mt-10">
                    <Image src={Pause}/>
                    <p>Pause generating</p>
                </div>
            </div>

            <div>
                <div className="flex flex-row my-10 bg-[#f7f7f7] rounded-full p-4 mx-4 gap-4">
                    <Image src={Smile}/>
                    <input placeholder="Send your message..." className="w-full bg-[#f7f7f7] outline-none"/>
                    <Image src={Attach}/>
                    <Image src={Location}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ChatBox