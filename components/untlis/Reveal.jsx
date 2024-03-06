"use client"
import gsap from "gsap";
import Image from 'next/image'
import Robot from "@/public/images/robot.png"

import { useEffect } from "react";


const Reveal = ({Children}) => {


  useEffect(() => {
    // Animation for the first box
    gsap.fromTo(
      ".box",
      {
        x: -400,
        // opacity: 0, // Add opacity property for better control
        // duration:1.5,
        // ease:"cric.out",
      },
      {
        x: 0,
        // opacity: 1,
        // duration:1.5,
        // ease:"cric.out",
      }
    );


  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="box ">
                    <Image src={Robot} width={600} height={500} alt='robot image ' className='absolute bottom-0 left-20'/>

    </div>
  );
};

export default Reveal;