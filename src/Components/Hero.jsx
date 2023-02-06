import { Buttons } from "./HeroButtons"
import { SocialLinks } from "./SocialLinks"
import HeroImage from '../assets/HeroImagev2.svg'

export const Hero = () => {
  return (
    <section id='home'>
      <div className="container flex flex-col justify-center text-[#f1faee] p-9 mt-20 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-md lg:max-w-sm xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Hola 👋, <br /> Soy <span className="w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#FC575E] to-[#F7B42C] lg:inline">Eduardo Sepúlveda</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 font-semibold">Entry-level Fullstack Developer de <span className="font-bold">Chile</span>.</p>
          <Buttons />
          <SocialLinks />
        </div>

        <div className="hidden md:flex items-center justify-center p-12 mt-8 lg:mt-8 h-72 sm:h-80 lg:h-96">
          <img src={HeroImage} alt="SVG illustration logo for the hero page" className="object-contain h-72 sm:h-80 lg:h-96"/>
        </div>

      </div>

    </section>
  )
}
