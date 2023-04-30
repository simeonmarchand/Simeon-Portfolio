import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ skillName, x, y }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute 
        '
      whileHover={{ scale: 1.25 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
    >
      {skillName}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer
        '
          whileHover={{ scale: 1.25 }}
        >
          Web
        </motion.div>

        <Skill skillName='HTML' x='-25vw' y='2vw' />
        <Skill skillName='CSS' x='-5vw' y='-11vw' />
        <Skill skillName='JavaScript' x='23vw' y='6vw' />
        <Skill skillName='ReactJS' x='0vw' y='11.5vw' />
        <Skill skillName='NextJS' x='-24vw' y='-15vw' />
        <Skill skillName='SQL' x='15vw' y='-12vw' />
        <Skill skillName='Software Development Methodologies' x='29vw' y='-5vw' />
        <Skill skillName='Git' x='0vw' y='-20vw' />
        <Skill skillName='Agile' x='18vw' y='18vw' />
        <Skill skillName='C++' x='-25vw' y='18vw' />
      </div>

    </>
  )
}

export default Skills