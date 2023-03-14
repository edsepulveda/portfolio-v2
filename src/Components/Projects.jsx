import { ProjectsV2 } from '../constants/data'

export const Projects = () => {
  return (
    <section id='projects'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='text-center lg:mb-16 mb-8'>
          <h2 className='mb-4 text-3xl lg:text-5xl tracking-wide font-bold text-[#e63946] uppercase'>
            Proyectos{' '}
            <span className='italic text-yellow-400 font-bold'>
              🚧 2/3 En construcción
            </span>
          </h2>
        </div>
        <div className='p-3 grid grid-cols-1 gap-4 lg:gap-12 lg:grid-cols-3 md:grid-cols-2'>
          {ProjectsV2.map((item) => (
            <article key={item.id}>
              <div className='overflow-hidden rounded-lg'>
                <img className='h-56 w-full object-cover' src={item.img} />
                <div className='p-4 sm:p-6 text-[#f1faee]'>
                  <div className='mt-0.5 font-bold text-2xl mb-5 text-gray-200'>
                    {item.title}
                  </div>
                  <p className='block text-[12px] text-[#f1faee]'>{item.desc}</p>
                </div>
                <div className='flex flex-col text-center gap-5 md:flex-row justify-center p-6'>
                  <a
                    className='px-12 py-3 border-none text-lg font-semibold rounded shadow-lg border focus:outline-transparent bg-[#e9c46a] hover:scale-110 transition duration-500'
                    href={item.demo}
                    target='_blank'
                  >
                    Demo
                  </a>
                  <a
                    className='px-12 py-3 border-none text-lg font-semibold rounded shadow-lg border focus:outline-transparent bg-[#e63946] hover:scale-110 transition duration-500'
                    href={item.code}
                    target='_blank'
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
