import About from '../assets/about.svg'
import { ProjectsV2 } from '../constants/data'

export const Projects = () => {
  return (
    <section id='projects'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className='mb-4 text-3xl lg:text-5xl tracking-wide font-bold text-[#FC575E] uppercase'>Proyectos</h2>
          <p className='font-light text-sm md:text-xl text-white'>Aqui es donde se encuentran mis mejores proyectos</p>
        </div>
        <div className='p-5 grid gap-5 lg:gap-10 lg:grid-cols-3'>
        {
              ProjectsV2.map((item) => (
                <div key={item.id} className='rounded-xl overflow-hidden shadow-lg bg-[#1c2e4a]'>
                  <img src={item.img}/>
                  <div className='px-6 py-4 text-white'>
                    <div className='font-bold text-2xl mb-5'>{item.title}</div>
                    <p className='text-base'>{item.desc}</p>
                  </div>
                  <div className='flex flex-col text-center gap-5 md:flex-row justify-around p-6'>
                    <a className='px-8 py-3 border-none text-lg font-semibold rounded-md shadow-lg border focus:outline-transparent bg-[#F7B42C] hover:scale-125 transition duration-500' href={item.demo} target='_blank'>Demo</a>
                    <a className='px-8 py-3 border-none text-lg font-semibold rounded-md shadow-lg border focus:outline-transparent bg-[#FC575E] hover:scale-125 transition duration-500' href={item.code} target='_blank'>Code</a>
                  </div>
              </div>
              ))
            }

        </div>
      </div>
    </section>
  )
}
