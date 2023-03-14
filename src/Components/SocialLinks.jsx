import { BsTwitter, BsLinkedin } from 'react-icons/bs'

export const SocialLinks = () => {
  return (
    <div className='flex flex-col space-y-4 sm:items-start sm:flex-row justify-start'>
      <ul className='flex flex-row mt-10 gap-5 items-center'>
        <a
          href='https://www.linkedin.com/in/ed-sepulveda-narvaez'
          target='_blank'
          className='hover:opacity-25 hover:scale-125 transition duration-500'
        >
          <BsLinkedin color='#0077b5' size={30} />
        </a>
      </ul>
    </div>
  )
}
