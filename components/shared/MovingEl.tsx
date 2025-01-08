import { toolLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const MovingEl = () => {
  return (
    <div className='relative  whitespace-nowrap z-0 py-2 overflow-hidden rounded-lg *:*:bg-white *:*:py-2 *:*:px-4 *:*:rounded-lg'>
      <div className='absolute z-10 w-32 left-0 top-0 h-full bg-gradient-to-r from-black  to-transparent'/>
      <div className='absolute z-10 w-32 right-0 top-0 h-full bg-gradient-to-l from-black  to-transparent'/>
      <div className='z-0 inline-flex justify-around animate-moving w-screen'>
        {
          toolLinks.map((tool,i)=>(
            <Image
              key={i}
              src={tool.imgSrc}
              alt={tool.imgAlt}
              width={90}
              height={90}
              className=''
            />
          ))
        }
      </div>
      <div className='z-0 inline-flex justify-around animate-moving w-screen'>
      {
          toolLinks.map((tool,i)=>(
            <Image
              key={i}
              src={tool.imgSrc}
              alt={tool.imgAlt}
              width={90}
              height={90}
              className=''
            />
          ))
        }
      </div>
    </div>
  )
}

export default MovingEl