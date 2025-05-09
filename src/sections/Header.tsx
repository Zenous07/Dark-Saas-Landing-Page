import { useDebugValue, useEffect, useState } from "react"
import CutCornerButton  from "../components/CutCornerButton.tsx"
import Heaxagon from "../components/Heaxagon.tsx"
import { twMerge } from "tailwind-merge"
import { AnimatePresence,easeInOut,motion } from "framer-motion"
 
const navLinks =[
    {
        title:'Home',
        href:'/'
    },
    {
        title:'Blog',
        href:'/blog'
    },
    {
        title:'Careers',
        href:'/careers'
    },
    {
        title:'Contact',
        href:'/contact'
    },
]

const Header = () => {
    const [isOpen,setIsOpen] =useState(false);

    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow='hidden'
        }
        else{
            document.body.style.overflow='auto'
        }
    },[isOpen]);
  return (
    <>
        <header className="sticky top-0 bg-zinc-900/20 backdrop-blur-lg z-40 n">
            <div className="container">
                <div className="flex justify-between items-center h-24 md:h-28">
                    <div>
                        <img  src="/assets/images/logo.svg" alt='Blockforge Logo'/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <CutCornerButton className="hidden md:inline-flex">Get Started</CutCornerButton>
                        <div className="size-10 relative" onClick={()=>setIsOpen(curr => !curr)}>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className={twMerge("w-5 h-0.5 bg-zinc-300 -translate-y-1 transition-all transition-500",isOpen && 'rotate-45 translate-y-0')}></div>
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className={twMerge("w-5 h-0.5 bg-zinc-300 translate-y-1 transition-all transition-500",isOpen && '-rotate-45 translate-y-0')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed size-full top-0 left-0 z-30 bg-zinc-900"
                    initial={{
                        opacity:0
                    }}   
                    animate={{
                        opacity:1
                    }} 
                    exit={{
                        opacity:0
                    }}
                    transition={{
                        duartion:0.5
                    }}
                >
                <div className="absolute inset-2 rounded-md bg-zinc-800 mt-24 md:mt-28 z-0">
                    <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                        <Heaxagon  size={700} ></Heaxagon>
                    </div>
                    <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
                        <Heaxagon size={1100} reverse></Heaxagon>
                    </div>
                    <div className="h-full flex justify-center items-center">
                        <nav className="flex flex-col items-center gap-12 md:gap-16">
                            {navLinks.map(({title,href},index)=>(
                                <motion.a 
                                initial={{
                                    opacity:0,
                                    y:-20,
                                    x:-10
                                }}
                                animate={{
                                    opacity:1,
                                    y:0,
                                    x:0
                                }}
                                transition={{
                                    duration:0.5,
                                    ease:'linear',
                                    delay:0.2*index
                                }}
                                    href={href} 
                                    key={title} 
                                    >
                                <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transit duration-300">{title}</span>
                                </motion.a>
                            ))}
                        </nav>
                    </div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}

export default Header