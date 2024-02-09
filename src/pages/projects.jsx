import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { projectsData, projectsNav } from '@/lib/data'
import { AnimatePresence, motion } from 'framer-motion'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}
export function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      />
    </svg>
  )
}

export default function Projects() {
  const [item, setItem] = useState({ name: 'all' })
  const [projects, setProjects] = useState([])
  const [active, setActive] = useState(0)
  useEffect(() => {
    // get Projects base on item
    if (item.name === 'all') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name
      })
      setProjects(newProjects)
    }
  }, [item])
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }
  return (
    <>
      <Head>
        <title>Projects - Amr Ibrahim</title>
        <meta name="description" content="Recent Projects" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hello there, I'm Amr Ibrahim, a dedicated front-end developer driven
            by a passion for crafting immersive and user-centric web
            experiences. With a solid year of industry experience under my belt,
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <main className="flex items-start gap-3 max-[639px]:flex-col max-[639px]:items-center max-[639px]:gap-10">
            <section className="flex flex-col gap-3 max-[639px]:flex-row max-[639px]:flex-wrap max-[639px]:justify-center max-[639px]:gap-4 ">
              {projectsNav.map((item, i) => {
                return (
                  <Button
                    key={i}
                    className={`${
                      active === i
                        ? 'border border-solid border-teal-500 opacity-100'
                        : 'opacity-50'
                    } flex-none max-[639px]:w-[7rem]`}
                    onClick={(e) => {
                      handleClick(e, i)
                    }}
                  >
                    {item.name}
                  </Button>
                )
              })}
            </section>
            <section className="gap flex flex-grow flex-wrap justify-center gap-x-4 gap-y-8">
              <AnimatePresence>
                {projects.map((project) => {
                  return (
                    <motion.article
                      layout
                      initial={{ transform: 'scale(0)' }}
                      animate={{ transform: 'scale(1)' }}
                      transition={{ type: 'spring', damping: 8, stiffness: 50 }}
                      className="rounded-md border border-solid border-teal-500/40 transition hover:rotate-1 hover:scale-105 hover:border-teal-500 dark:bg-gradient-to-b dark:from-slate-700/30 dark:to-slate-700/30 "
                    >
                      <Image
                        src={project.image}
                        alt=""
                        width={266}
                        height={266}
                        className="rounded-md"
                        priority
                      />
                      <div className="w-[266px] px-1.5 py-4">
                        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          {project.name}
                        </h2>
                        <p className="relative z-10 mb-2 mt-2 text-sm text-zinc-600 dark:text-zinc-400 ">
                          {project.description}
                        </p>
                        <div className="flex">
                          <Link
                            href={project.link.href}
                            target="_blank"
                            className="group relative z-10 text-sm font-medium text-zinc-400 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                          >
                            <LinkIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                          </Link>
                          <Link
                            href={project.link.label}
                            target="_blank"
                            className="group ml-4 flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                          >
                            <GitHubIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  )
                })}
              </AnimatePresence>
            </section>
          </main>
        </div>
      </Container>
    </>
  )
}
