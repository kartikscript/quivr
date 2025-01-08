import { ChevronDown } from 'lucide-react'
import React from 'react'

const DropdownMenu = ({title,children}:{title:string,children:React.ReactNode}) => {
  return (
    <div className='group relative' >
      {title} <ChevronDown className='size-4 group-hover:rotate-180 transition-all duration-300'/>
      <div className='z-10 hidden group-hover:block absolute top-0 left-0 pt-10'>
        <div className='grid grid-cols-[auto_auto] gap-3 rounded-lg p-5 space-y-1 w-max bg-neutral-900 shadow-sm shadow-neutral-800 *:cursor-pointer *:min-w-40 *:p-2 hover:*:bg-neutral-800 *:whitespace-nowrap *:rounded-md *:flex *:items-center *:gap-2 *:text-sm '>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu