import Image from 'next/image';
import React from 'react'

export default function ProjectCard({ item }) {
    return (
        <div className="relative group w-full overflow-clip h-[300px] px-4 py-3 flex flex-col justify-center items-center text-mainText  rounded-lg bg-gradientBox ">
         
         <div className="relative w-full h-full">
            <Image src={item.img} alt={item.title} layout='fill' loading='lazy' />
         </div>
    
          <div className="flex flex-col translate-y-full group-hover:translate-y-0 transition-all duration-300 delay-300 justify-between absolute left-0 top-0 min-w-full min-h-full p-2 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <label className="font-bold text-xs text-nowrap text-center">
              {item.title}{" "}
            </label>

            <p className="text-sm text-mainText">
              {item.desc}
            </p>
          </div>
        </div>
      );
}
