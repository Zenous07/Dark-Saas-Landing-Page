import CutCornerButton from "../components/CutCornerButton"
import Heaxagon from "../components/Heaxagon"
import Circle from "../components/Circle"

const Hero = (props: Props) => {
  return (
    <section className="py-24 md:py-52 overflow-x-clip">
        <div className="container">
            <p className="uppercase font-extrabold text-zinc-500 tracking-wider text-center">Introducing BlockForge</p>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-center mt-4 max-w-3xl lg:text-7xl mx-auto">The Future Of Blockchain Is Here</h1>
            <p className="text-center text-xl md:text-2xl mt-6 max-w-xl mx-auto text-zinc-400">Blockforge is pioneering smart contract integrity with cutting-edge data solutions</p>
            <div className="flex justify-center mt-10">
              <CutCornerButton className="">Get Started</CutCornerButton>
            </div>
            <div className="flex justify-center mt-24">
              <div className="inline-flex relative z-0">
                <div  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Heaxagon className="size-[1100px]"></Heaxagon>
                </div>
                <div  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Heaxagon className="size-[1800px]"></Heaxagon>
                </div>
                <div  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className="absolute left-[200px] -top-[900px]">
                    <img 
                      src="/assets/images/cube.png"
                      alt="3D cube image"
                      className="size-[140px]"
                    />
                  </Circle>
                </div>
                <div  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Circle className="absolute left-[200px] top-[270px]">
                  <img 
                      src="/assets/images/cuboid.png"
                      alt="3D cuboid image"
                      className="size-[140px]"
                    />
                  </Circle>
                  <div  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Circle className="absolute -left-[600px] -top-[80px]">
                  <img 
                      src="/assets/images/torus.png"
                      alt="3D Torus image"
                      className="size-[140px]"
                    />
                  </Circle>
                </div>
                </div>
                <img  
                  src="/assets/images/icosahedron.png"
                  alt=""
                  className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 satureate-[10%] brightness-[5%] hue-rotate-[240deg]"
                  /> 
                <img  
                  src="/assets/images/icosahedron.png"
                  alt="Iconsahedron 3D"
                  className="w-[500px]"
                /> 
              </div>
            </div>
            <div className="flex flex-col items-center mt-40 md:mt-80 gap-4">
              <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
                <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
              </div>
              <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scrroll to learn more</p>
            </div>
              
        </div>
    </section>
  )
}

export default Hero