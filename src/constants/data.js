import About from '../assets/about.svg'
import OpenAI from '../assets/img.png'
import Blog from '../assets/blog.png'

export const navLinks = [
  {
    id: 1,
    linkName: 'Home'
  },
  {
    id: 2,
    linkName: 'About'
  },
  {
    id: 3,
    linkName: 'Projects'
  },
  {
    id: 4,
    linkName: 'Contact'
  }
]

export const ProjectsV2 = [
  {
    id: 1,
    title: 'Blog',
    desc: 'Blog created with MERN Stack and TailwindCSS',
    img: Blog,
    demo: 'https://mern-blog-app-roan.vercel.app',
    code: 'https://github.com/edsepulveda/MERN-Blog-App'
  },
  {
    id: 2,
    title: 'OpenAI Showcase',
    desc: 'Usign the OpenAI API Create IMAGES & Ask for help, built with MERN Stack and ChakraUI',
    img: OpenAI,
    demo: 'https://openai-showcase.vercel.app',
    code: 'https://github.com/edsepulveda/openai-showcase'
  },
  {
    id: 3,
    title: 'E-commerce',
    desc: 'Build with *Thinking*, and with Chakra/MUI or Tailwind...',
    img: About,
    demo: 'https://bit.ly/3YsxjgN',
    code: 'https://bit.ly/3YsxjgN'
  }
]
