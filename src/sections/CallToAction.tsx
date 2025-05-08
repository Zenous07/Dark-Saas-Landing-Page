import React, { useRef } from 'react'
import CutCornerButton from '../components/CutCornerButton'
import Heaxagon from '../components/Heaxagon'
import Circle from '../components/Circle'
import { useScroll, useTransform,motion } from 'framer-motion'

type Props = {}

const CallToAction = (props: Props) => {
    const sectionRef =useRef(null);
    const {scrollYProgress}=useScroll({
        target:sectionRef,
        offset:['start end','end start'],
    });
    const rotate = useTransform(scrollYProgress,[0,1],[-45,45])
  return (
    <section className='py-60 overflow-hidden' ref={sectionRef}>
        <div className="container">
            <div className='relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Heaxagon  size={700}/>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Heaxagon size={1100} reverse duration={50}/>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Circle className='absolute -top-[400px] left-0' animate>
                        <motion.img 
                            src='/assets/images/cuboid.png'
                            className='size-[140px]'
                            style={{
                                rotate,
                            }}
                        />
                    </Circle>
                </div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Circle className='absolute -top-[50px] -left-[600px]' animate>
                        <motion.img 
                            src='/assets/images/cylinder.png'
                            className='size-[140px]'
                            style={{
                                rotate:rotate
                            }}
                        />
                    </Circle>
                </div>
                <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>Ready to <span className='block'>get started ?</span></h2>
                <p className='text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-md mx-auto'>Start building using blockchain technology, with BlockForge.</p>
                <div className="flex justify-center mt-12">
                    <CutCornerButton>Get Started</CutCornerButton>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CallToAction