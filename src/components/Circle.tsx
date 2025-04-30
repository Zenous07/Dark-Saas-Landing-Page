import React, { type ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'
import {motion} from "framer-motion"


const Circle = (props: ComponentPropsWithoutRef<'div'> & {animate?:boolean}) => {
    const {className,children,animate=false}=props;
  return (
    <div className={twMerge("bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full relative",className)}>
      <motion.div 
        className={twMerge('outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute inset-0 rounded-full border-[6px] border-transparent ',animate && 'border-t-fuchsia-500/30')}
        animate={animate && {
          rotate:360,
        }}
        transition={{
          ease:"linear",
          duration:3,
          repeat:Infinity,
        }}
      />
        {children}
    </div>
  )
}

export default Circle