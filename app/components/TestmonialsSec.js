import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Women from "@/public/images/women.png"

const TestmonialsSec = () => {
  return (
    <section className='h-full w-[100%] flex justify-center my-20'>
        <div className='w-[80%] relative'>

        

        <div>
            <Carousel className="mt-10 relative w-full">

            <div className='flex flex-col sm:flex-row justify-between items-center mb-10'>

            <div className='sm:w-[40%]'>
                <h6 className='uppercase text-lightgrey text-center sm:text-left font-semibold'>interest</h6>
                <h3 className='text-3xl sm:text-5xl font-medium mt-6'>What our client says about our products</h3>
            </div>
            
            
            <div className='flex gap-10 max-sm:mt-20'>
                <CarouselPrevious />
                <CarouselNext/> 
            </div>
            </div>

                <CarouselContent>
                    <CarouselItem>
                            <div className='w-[100%] flex flex-col sm:flex-row gap-8 sm:gap-20'>
                                <Image src={Women} className='sm:w-[40%]'/>
                                <div className='sm:w-[60%]  sm:mt-16 max-sm:text-center '>
                                    <p className='text-grey text-lg sm:text-3xl  font-normal'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem ipsum dolor sit amet,
                                         consectetur adipiscing elit. Orci, nullam risus, Lorem Ipsum has been the industry's standard </p>
                                    <h3 className='font-semibold mt-4 sm:mt-16 text-xl sm:text-2xl '>Jasmine Edwards</h3>
                                    <p className='text-grey font-light text-base sm:text-2xl mt-2 sm:mt-4'>Top Player Karambol</p>
                                </div>
                            </div>
                    </CarouselItem>

                    <CarouselItem>
                            <div className='w-[100%] flex flex-col sm:flex-row gap-8 sm:gap-20'>
                                <Image src={Women} className='sm:w-[40%]'/>
                                <div className='sm:w-[60%]  sm:mt-16 max-sm:text-center '>
                                    <p className='text-grey text-lg sm:text-3xl  font-normal'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem ipsum dolor sit amet,
                                         consectetur adipiscing elit. Orci, nullam risus, Lorem Ipsum has been the industry's standard </p>
                                    <h3 className='font-semibold mt-4 sm:mt-16 text-xl sm:text-2xl '>Jasmine Edwards</h3>
                                    <p className='text-grey font-light text-base sm:text-2xl mt-2 sm:mt-4'>Top Player Karambol</p>
                                </div>
                            </div>
                    </CarouselItem>

                    <CarouselItem>
                            <div className='w-[100%] flex flex-col sm:flex-row gap-8 sm:gap-20'>
                                <Image src={Women} className='sm:w-[40%]'/>
                                <div className='sm:w-[60%]  sm:mt-16 max-sm:text-center '>
                                    <p className='text-grey text-lg sm:text-3xl  font-normal'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem ipsum dolor sit amet,
                                         consectetur adipiscing elit. Orci, nullam risus, Lorem Ipsum has been the industry's standard </p>
                                    <h3 className='font-semibold mt-4 sm:mt-16 text-xl sm:text-2xl '>Jasmine Edwards</h3>
                                    <p className='text-grey font-light text-base sm:text-2xl mt-2 sm:mt-4'>Top Player Karambol</p>
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