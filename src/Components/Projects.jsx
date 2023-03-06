import { ProjectsV2 } from '../constants/data'

export const Projects = () => {
  return (
    <section id='projects'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className="text-center lg:mb-16 mb-8">
          <h2 className='mb-4 text-3xl lg:text-5xl tracking-wide font-bold text-[#FC575E] uppercase'>Proyectos <span className='italic text-yellow-400 font-bold'>🚧 En construcción</span></h2>
          <p className='font-light text-sm md:text-xl text-white'>Aqui es donde se encuentran mis ultimos projectos que he realizado</p>
        </div>
        <div className='p-3 grid grid-cols-1 gap-5 lg:gap-16 lg:grid-cols-3 md:grid-cols-2'>
        {
              ProjectsV2.map((item) => (
                <div key={item.id} className='overflow-hidden rounded-lg'>
                  <img className='h-56 w-full object-cover' src={item.img}/>
                  <div className='p-4 sm:p-6 text-white'>
                    <div className='mt-0.5 font-bold text-2xl mb-5'>{item.title}</div>
                    <p className='block text-sm'>{item.desc}</p>
                  </div>
                  <div className='flex flex-col text-center gap-5 md:flex-row justify-center p-6'>
                    <a className='px-12 py-3 border-none text-lg font-semibold rounded shadow-lg border focus:outline-transparent bg-[#F7B42C] hover:scale-110 transition duration-500' href={item.demo} target='_blank'>Demo</a>
                    <a className='px-12 py-3 border-none text-lg font-semibold rounded shadow-lg border focus:outline-transparent bg-[#FC575E] hover:scale-110 transition duration-500' href={item.code} target='_blank'>Code</a>
                  </div>
              </div>
              ))
            }

        </div>
      </div>
    </section>
  )
}
