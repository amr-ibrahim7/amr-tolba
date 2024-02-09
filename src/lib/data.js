// projects
import furniture from '@/images/projects/furnture.png'
import pizza from '@/images/projects/pizza.png'
import space from '@/images/projects/space.png'
import music from '@/images/projects/music.png'
import sip from '@/images/projects/sip.png'
import nike from '@/images/projects/nikee.png'
import weather from '@/images/projects/weather.png'
import wild from '@/images/projects/wild_oasis.png'
import Tafawq from '@/images/projects/Tafawq.png'
// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'Web Basic',
  },
  {
    name: 'React',
  },
  {
    name: 'UI&UX',
  },
]
export const projectsData = [
  {
    id: '1',
    image: furniture,
    link: {
      href: 'https://amr-ibrahim7.github.io/furniture/ ',
      label: 'https://amr-ibrahim7.github.io/furniture/',
    },
    name: 'Furniture',
    description:
      'Landing Page for Furniture Tools Used: HTML, CSS, JavaScript Description: As a front-end developer, ',
    category: 'Web Basic',
  },
  {
    id: '2',
    image: pizza,
    link: {
      href: 'https://asipglory.netlify.app/',
      label: 'https://github.com/amr-ibrahim7/fastPizz?tab=readme-ov-file',
    },
    name: 'Fast Pizza',
    description:
      'The app called "Fast React Pizza Co." is an easy-to-use platform that allows users to order pizza quickly and easily.',
    category: 'React',
  },
  {
    id: '3',
    image: space,
    link: {
      href: 'https://space-tourism77.netlify.app/',
      label: 'https://github.com/amr-ibrahim7/Space-tourism-multi-page-website',
    },
    name: ' Space Tourism',
    description:
      'Frontend Mentor - Space tourism Tools Used: HTML, CSS, JavaScript',
    category: 'Web Basic',
  },
  {
    id: '4',
    image: music,
    link: {
      href: 'https://site-mus.vercel.app/',
      label: 'https://github.com/amr-ibrahim7/Site-Mus',
    },
    name: 'Site Music',
    description: 'Landing Page for Site Music Tools Used: React',
    category: 'React',
  },
  {
    id: '5',
    image: nike,
    link: { href: '#', label: 'https://github.com/amr-ibrahim7/Nikee' },
    name: 'E-commerce',
    description:
      'This is an open source e-commerce nike shoes build with Next.js',
    category: 'React',
  },
  {
    id: '6',
    image: sip,
    link: {
      href: 'https://asipglory.netlify.app/',
      label: 'https://github.com/amr-ibrahim7/AsipGlory-Coffee',
    },
    name: 'A Sip Glory-Coffee ',
    description:
      'Landing Page forA sip of Glory is responsive landing page HTML, CSS, JavaScript',
    category: 'Web Basic',
  },
  {
    id: '7',
    image: weather,
    link: {
      href: 'https://amr-ibrahim7.github.io/Weather_App/',
      label: 'https://github.com/amr-ibrahim7/Weather_App?tab=readme-ov-file',
    },
    name: 'Weather_App',
    description:
      'The application allows users to view real-time weather data for a selected city, offering an interactive and engaging user experience.',
    category: 'Web Basic',
  },
  {
    id: '8',
    image: wild,
    link: {
      href: 'https://vimeo.com/859576638?share=copy',
      label: 'https://github.com/amr-ibrahim7/Wild-Oasis',
    },
    name: 'Wild_Oasis',
    description:
      'The Wild Oasis hotel management app is a full-featured React web application that allows hotel employees to manage cabins, bookings, and guests. ',
    category: 'React',
  },
  {
    id: '9',
    image: Tafawq,
    link: {
      href: 'https://www.figma.com/file/SEaoUtFTYHi1ZRnBaJpNX2/Master-UI-Create-Dynamic-User-Interfaces-Free-Version?type=design&node-id=2%3A452&mode=design&t=MnVefR5lmPHrEkHL-1',
      label: '#',
    },
    name: ' Tafawq',
    description: 'Tafwqq',
    category: 'UI&UX',
  },
]
export const projects = [
  {
    name: 'Nike Shoes Ecommerce',
    description:
      'This is an open source e-commerce nike shoes build with Next.js. ',
    link: { href: '#', label: 'github.com' },
    logo: nike,
  },
  {
    name: 'The Wild Oasis hotel',
    description:
      'The Wild Oasis hotel management app is a full-featured React web application that allows hotel employees to manage cabins, bookings, and guests. The app uses Supabase for its backend and implements a variety of advanced React techniques, such as HOCs, the Compound Component Pattern, and React Query.',
    link: {
      href: 'https://vimeo.com/859576638?share=copy',
      label: 'Application Video',
    },
    logo: wild,
  },
]
