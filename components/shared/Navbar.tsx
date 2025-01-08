import { AlarmClock, ArrowRight, Brain, Currency, Github, HandHelping, Notebook, PencilRuler, Star, Telescope, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DropdownMenu from '../DropdownMenu'

const Navbar = () => {
  return (
      <nav className="fixed z-50 top-0 left-0 w-full bg-neutral-950/70 backdrop-blur-md border-b border-white/5 flex justify-between items-center  py-4 px-10">
        <div className='flex items-center gap-24'>
          <Link href={"/"} className='flex items-center gap-2'>
            <Image
              src={"/logos/logo.svg"}
              alt="logo"
              width={70}
              height={70}
            />
            <p className="text-3xl font-medium tracking-wide font-cinzel text-white">Quivr</p>
          </Link>
          <div className="flex gap-16 text-white/50  hover:*:text-white/80 *:relative *:z-0 *:flex *:items-center *:gap-1">
           <DropdownMenu title='Solutions'>
            <p><PencilRuler width={20}/>Engineering</p>
            <p><Users width={20}/>People</p>
            <p><HandHelping width={20}/>Customer Support</p>
            <p><Brain width={20}/>Knowledge Management</p>
            <p><Currency width={20}/>Sales</p>
           </DropdownMenu>
           <DropdownMenu title='Developers'>
            <p><Notebook width={20}/>Documentation</p>
            <p><Telescope width={20}/>Discord</p>
            <p><AlarmClock width={20}/>Quickstart Guide</p>
            <p><Github width={20}/>Github</p>
           </DropdownMenu>
            <a href="">Pricing</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className='flex items-center gap-10'>
          <a href='https://github.com/quivr' target='_blank' className='flex  items-center border border-white/40  bg-gray-800 px-1  py-[2px] rounded-md transition-all hover:border-white/70 hover:bg-gray-900'>
            <Github className='size-6 p-1'/>
            <p className='flex gap-[1px] items-center text-xs tracking-wide p-1 pl-2 border-l border-white/40'>
              37k +<Star className='size-3 stroke-yellow-300 fill-yellow-300'/>
            </p>
          </a>
          <div className='flex gap-3'>
            <button className='font-medium tracking-wide py-1 px-2 rounded-lg ring-white ring-0 ring-inset transition-all text-white/70 hover:text-white hover:ring-1'>Sign-In</button>
            <button className='group flex gap-[2px] items-center font-cinzel font-medium  tracking-wider capitalize py-2 px-4 rounded-lg hover:shadow-[0_0_4px_1px] hover:shadow-main/20 transition-all  bg-gradient-to-br from-main via-main/40 to-main/5 hover:border-dark'
              >
              try for free <ArrowRight className='size-4 group-hover:translate-x-1 transition-all'/>
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar