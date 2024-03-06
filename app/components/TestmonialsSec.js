import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Women from "@/public/images/women.png"

const TestmonialsSec = () => {
  return (
    <section className='h-screen w-[100%] flex justify-center mt-20'>
        <div className='w-[80%] relative'>

        

        <div>
            <Carousel className="mt-10 relative w-full">

            <div className='flex flex-row justify-between items-center mb-10'>

            <div className='w-[40%]'>
                <h6 className='uppercase text-lightgrey text-l font-semibold'>interest</h6>
                <h3 className='text-5xl font-medium mt-6'>What our client says about our products</h3>
            </div>
            
            
            <div className='flex gap-10'>
                <CarouselPrevious />
                <CarouselNext/> 
            </div>
            </div>

                <CarouselContent>
                    <CarouselItem>
                            <div className='flex flex-row gap-20'>
                                <Image src={Women}/>
                                <div className='mt-16'>
                                    <p className='text-grey text-3xl font-normal'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem ipsum dolor sit amet,
                                         consectetur adipiscing elit. Orci, nullam risus, Lorem Ipsum has been the industry's standard </p>
                                    <h3 className='font-semibold mt-16 text-2xl'>Jasmine Edwards</h3>
                                    <p className='text-grey font-light text-2xl mt-4'>Top Player Karambol</p>
                                </div>
                            </div>
                    </CarouselItem>

                    <CarouselItem>
                            <div className='flex flex-row gap-20'>
                                <Image src={Women}/>
                                <div className='mt-16'>
                                    <p className='text-grey text-3xl font-normal'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem ipsum dolor sit amet,
                                         consectetur adipiscing elit. Orci, nullam risus, Lorem Ipsum has been the industry's standard </p>
                                    <h3 className='font-semibold mt-16 text-2xl'>Jasmine Edwards</h3>
                                    <p className='text-grey font-light text-2xl mt-4'>Top Player Karambol</p>
                                </div>
                            </div>
                    </CarouselItem>

                    <CarouselItem>
                            <div className='flex flex-row gap-20'>
                                <Image src={Women}/>
                                <div className='mt-16'>
                                    <p className='text-grey text-3xl font-normal'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem ipsum dolor sit amet,
                                         consectetur adipiscing elit. Orci, nullam risus, Lorem Ipsum has been the industry's standard </p>
                                    <h3 className='font-semibold mt-16 text-2xl'>Jasmine Edwards</h3>
                                    <p className='text-grey font-light text-2xl mt-4'>Top Player Karambol</p>
                                </div>
                            </div>
                    </CarouselItem>

                   
                </CarouselContent>
            </Carousel>
        </div> 

        </div>
    </section>
  )
}

export default TestmonialsSec