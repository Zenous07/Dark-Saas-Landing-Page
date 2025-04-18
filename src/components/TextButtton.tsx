import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"

const TextButtton = (props: ComponentPropsWithoutRef<'buttton'>&{color?:string}) => {
    const {className,color,children}=props;
  return (
    <button className={twMerge('text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500 group-hover:text-fuchsia-400/80 transition duration-300',
    color==='lime'&&'text-lime-500 group-hover:text-lime-400/80',
    color==='cyan'&&'text-cyan-500 group-hover:text-cyan-400/80',
    color==='violet'&&'text-violet-500 group-hover:text-violet-400/80',
    className)}>
        {children}
    </button>
  )
}

export default TextButtton