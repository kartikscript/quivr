import MovingEl from "@/components/shared/MovingEl";
import Title from "@/components/Title";
import { orgLinks } from "@/constants";
import { ArrowRight, SquareCheckBig } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-dark/[0.03] min-h-screen">
      <main className="bg-neutral-950 h-screen flex flex-col justify-center items-center space-y-6">
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
        <div className="z-0 absolute bottom-0 left-0 w-full h-3/4 "/>
      </div>
      <div className="  space-y-10" >
        <h2 className="text-2xl capitalize font- tracking-wider text-center">Trusted by 50k+ users across leading organizations</h2>
        <div className="flex justify-between items-center gap-8 mx-10 rounded-lg bg-white">
          {
            orgLinks.map((org,index)=>(
              <Image
                key={index}
                src={org.imgSrc}
                alt={org.imgAlt}
                width={150}
                height={150}
                className="filter grayscale hover:filter-none transition-all"
              />
            ))
          }
        </div>
      </div>
      <section className="py-40 px-10 space-y-10 ">
          <h2 className="font-cinzel text-3xl text-center font-semibold  text-dark">Integrations</h2>
          <Title>Connect Quivr<br/> with your favourite tools</Title>
          <ul className="p-4 w-fit mx-auto grid gap-x-4 gap-y-1 text-sm grid-cols-[auto_auto] rounded-lg bg-gradient-to-br from-transparent to-main/10"> 
            {
              ['Files', 'Applications', 'APIs', 'Databases', 'Custom integrations'].map((item,index)=>(
                <li key={index} className="flex items-center gap-2 tracking-wide text-white/70">
                  <SquareCheckBig className="size-4"/>{item}
                </li>
              ))
            }
          </ul>
          <MovingEl/>
      </section>
      <section>
        <Title>Configure your second brains</Title>
        <p>Your second brains continuously train on your company&apos;s unique context to improve search relevance and knowledge discovery.</p>
      </section>
    </div>
  );
}
