import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import Lottie from 'lottie-react'
import doneAnimation from '../animation/donee.json'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank you for reaching out - Amr Ibrahim</title>
        <meta
          name="description"
          content="Looking forward to working with you."
        />
      </Head>
      <SimpleLayout
        title="Thanks for your message!"
        intro="I appreciate you reaching out and will be in touch with you soon to discuss further."
      />
      <Lottie
        // loop={false}
        style={{ height: 55 }}
        animationData={doneAnimation}
      />
      ;
    </>
  )
}
