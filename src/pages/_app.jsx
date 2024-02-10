import { useEffect, useRef, useState } from 'react'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import 'focus-visible'
import BackToTopButton from '@/components/BackToTopButton'
import ThisCantBeReached from '@/components/ThisCantBeReached'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router?.pathname)
  const [sharedState, setSharedState] = useState({ finishedLoading: false })
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true)

  useEffect(() => {
    // Simulate loading time with setTimeout
    const loadingTimeout = setTimeout(() => {
      setSharedState({ finishedLoading: true })
      setShowThisCantBeReached(false)
    }, 4000) // Adjust this timeout based on your loading time

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout)
  }, [])

  return (
    <>
      {ShowThisCantBeReached && <ThisCantBeReached />}
      {sharedState.finishedLoading && (
        <>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>
              <Component previousPathname={previousPathname} {...pageProps} />
            </main>
            <BackToTopButton />
          </div>
        </>
      )}
    </>
  )
}
