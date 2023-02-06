import AboutMe from '../assets/about.svg'

export const About = () => {
  return (
    <section id='about' className='px-10'>
      <div className='container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20'>
        <div className='hidden md:block w-[550px] overflow-hidden'>
          <img src={AboutMe}/>
        </div>
        <div className='my-auto flex flex-col gap-3 text-white text-center lg:text-left'>
          <h1 className='text-[#FC575E] font-bold uppercase'>Acerca de mi</h1>
          <h3 className='text-3xl lg:text-4xl font-bold'>Full-stack Developer</h3>
          <p>Me desempeño ampliamente en la creación de páginas utilizando diversas herramientas:
            Ademas de utilizar herramientas Cloud, principalmente AWS [EC2, S3]
          </p>
          <div className='flex flex-col gap-8 md:gap-0 md:flex-row justify-around mt-5'>
            
            <ul className='list-none lg:list-disc text-left'>
              <p className='mb-2 uppercase font-bold border-b-2 border-[#FC575E] w-5/12 lg:w-auto'>Frontend</p>
              <li>React</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
            </ul>

            <ul className='list-none lg:list-disc text-left'>
              <p className='mb-2 uppercase font-bold border-b-2 border-[#FC575E] w-5/12 lg:w-auto'>Backend</p>
              <li>NodeJS</li>
              <li>Django</li>
              <li>Flask</li>
            </ul>

            <ul className='list-none lg:list-disc text-left'>
              <p className='mb-2 uppercase font-bold border-b-2 border-[#FC575E] w-5/12 lg:w-auto'>Bases de datos</p>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
            </ul>

          </div>
 
        </div>
      </div>
    </section>
  )
}
