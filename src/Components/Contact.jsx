export const Contact = () => {
  return (
    <section id='contact' className='px-5 py-24'>
      <div className='text-center mx-auto text-white'>
        <h2 className='mb-4 text-3xl lg:text-5xl tracking-wide font-bold text-[#e63946] uppercase'>
          Contactame
        </h2>
        <p className='py-2'>
          Email:{' '}
          <a
            href='mailto:ed.sepulveda12@gmail.com'
            className='hover:underline font-bold'
          >
            ed.sepulveda12@gmail.com
          </a>
        </p>
        <p className='py-2'>
          Or:{' '}
          <a
            href='mailto:eduardosepulveda1212@gmail.com'
            className='hover:underline font-bold'
          >
            eduardosepulveda1212@gmail.com
          </a>
        </p>
        <p className='py-2'>
          <a
            href='https://www.linkedin.com/in/ed-sepulveda-narvaez'
            target='_blank'
            className='hover:underline font-bold'
          >
            Linkedin
          </a>
        </p>
      </div>
    </section>
  )
}
