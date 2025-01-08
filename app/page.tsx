import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <main className="h-screen flex flex-col justify-center items-center space-y-6">
        <h1 className="text-5xl font-semibold font-cinzel leading-[1.1] text-center">Boost Your Productivity <br/>with <span className=" text-dark">AI</span></h1>
        <p className=" font-light tracking-wider text-white/60">Personalized AI That Learns and Grows with Your Knowledge Base</p>
        <div className="flex gap-8 pt-4">
          <button className='font-medium tracking-wide py-2 px-4 rounded-lg ring-1 ring-inset transition-all text-white/60 hover:text-white  hover:ring-2 ring-main/60 '>Book Demo</button>
          <button className='group flex gap-[2px] items-center font-cinzel font-medium  tracking-wider capitalize py-2 px-4 rounded-lg hover:shadow-[0_0_4px_1px] hover:shadow-main/20 transition-all  bg-gradient-to-br from-main via-main/40 to-main/5 hover:border-dark'
                >
                try for free <ArrowRight className='size-4 group-hover:translate-x-1 transition-all'/>
          </button>
        </div>
      </main>
      <div className="relative  flex justify-center">
        <Image
          src="/images/hero.png"
          alt="hero"
          width={850}
          height={850}
          className="rounded-lg z-10 shadow-[0_0_70px_10px] shadow-dark/20 object-cover -translate-y-1/4 "
        />
        <div className="z-0 absolute bottom-0 left-0 w-full h-3/4 bg-dark/[0.03]"/>
      </div>
      <div className=" bg-dark/[0.03]" >
        <h2 className="text-2xl font- tracking-wider text-center">Trusted by 50k+ users across leading organizations</h2>

      </div>
    </div>
  );
}
