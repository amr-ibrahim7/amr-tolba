import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'lottie-react'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  LinkIcon,
  MailIcon,
} from '@/components/SocialIcons'
import Newsletter from '@/components/Newsletter'
import deveAnimation from '../animation/deve.json'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import Photos from '@/components/Photos'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-8 w-8 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  const lottieRef = useRef()
  return (
    <>
      <Head>
        <title>Amr Ibrahim - Front-end Developer & Designer</title>
        <meta
          name="description"
          content="Hell My name is Amr ibrahim! I'm a junior developer passionate about coding and eager to learn. I'm on a journey to explore the vast world of programming, turning ideas into reality. Excited to collaborate, grow, and make a positive impact through technology!"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
          >
            Amr Ibrahim - Web Developer & Designer
          </motion.h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hello! I'm a junior developer passionate about coding and eager to
            learn. I'm on a journey to explore the vast world of programming,
            turning ideas into reality. Excited to collaborate, grow, and make a
            positive impact through technology!
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/amr-ibrahim7"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/amribrahimwebdev/x"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="mailto:amrtolba015@gmail.com"
              target="_blank"
              icon={MailIcon}
            >
              amrtolba015@gmail.com
            </SocialLink>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 ">
          <div className="flex flex-col gap-16">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1 lg:grid-cols-1"
            >
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                Projects
              </h2>
              {projects.map((project) => (
                <Card as="li" key={project.name}>
                  <div className="relative z-10 flex items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={project.logo}
                      alt=""
                      className="h-70 w-70 rounded-md"
                      unoptimized
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={project.link.href}>
                      {project.name}
                    </Card.Link>
                  </h2>
                  <Card.Description>{project.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                  </p>
                </Card>
              ))}
            </ul>
          </div>
          {/*  */}
          <Lottie
            // loop={false}
            style={{ height: 365 }}
            className="translate-x-[100px] translate-y-1/2 max-[1024px]:-translate-y-[10px] max-[1024px]:translate-x-[10px]"
            animationData={deveAnimation}
            lottieRef={lottieRef}
            onLoadedImages={() => {
              // https://lottiereact.com/
              lottieRef.current.setSpeed(0.5)
            }}
          />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  )
}
