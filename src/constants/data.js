import About from '../assets/about.svg'
import OpenAI from '../assets/img.png'

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
  },
]

export const ProjectsV2 = [
  {
    id: 1,
    title: 'Blog',
    desc: 'Blog created with React, NodeJS, MongoDB and TailwindCSS',
    img: About,
    demo: 'https://mern-blog-app-roan.vercel.app',
    code: 'https://bit.ly/3YsxjgN'
  },
  {
    id: 2,
    title: 'OpenAI Showcase',
    desc: 'Usign the OpenAI API Create IMAGES & Ask for help, built with React, ChakraUI & ExpressJS',
    img: OpenAI,
    demo: 'https://openai-showcase.vercel.app',
    code: 'https://github.com/edsepulveda/openai-showcase'
  },
  {
    id: 3,
    title: 'Gif Viewer & Sharing',
    desc: 'Powered by GIPHY API, usign React and TailwindCSS',
    img: About,
    demo: 'https://bit.ly/3YsxjgN',
    code: 'https://bit.ly/3YsxjgN'
  },
]