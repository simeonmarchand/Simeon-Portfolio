import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { calcLength, spring, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>

}

const about = () => {
  return (
    <>
      <Head>
        <title></title>
        <meta name='description' content='' />
      </Head>

      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16'></AnimatedText>
          <div className='grid w-full grid-cols-8 gap-16 '>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
              <p className='font-medium'>
                Motivated and detail-oriented software application development student with a passion for creating innovative
                solutions to complex problems. Skilled in multiple programming languages such as HTML, CSS, JavaScript, C++, and SQL,
                with experience in developing and testing software applications.
              </p>
              <p className='mt-4 font-medium'>
                Proficient in software development methodologies and
                able to apply them to real-world projects. Strong problem-solving and analytical skills, with the ability to work
                both independently and as part of a team. Seeking a software development position where I can utilize
                my technical skills and creativity to contribute to the success of the company.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 
            
            '>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image src={profilePic} alt='Simeon Marchand' className='w-full h-auto rounded-2xl' />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Satisfied clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={1} />  +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Years of experience</h2>
              </div>
            </div>
          </div>

          <Skills />
        </Layout>
      </main>
    </>
  )
}

export default about