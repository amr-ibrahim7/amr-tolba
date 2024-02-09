import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

function ChevronUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  )
}
const BackToTopButton = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 300 ? setShow(true) : setShow(false)
    })
  })
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="fixed bottom-24 right-24 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-sky-700 text-white transition hover:bg-sky-900 max-[639px]:bottom-4 max-[639px]:right-4"
      >
        {' '}
        <ChevronUpIcon />
      </button>
    )
  )
}

export default BackToTopButton
