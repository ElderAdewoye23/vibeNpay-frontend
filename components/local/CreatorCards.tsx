"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/card'
import { features } from '../../data/data'


function CreatorCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }



  return (
    <motion.div
      className='px-4 py-20 border-t-2 md:px-10 my-10 bg-gray-100'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
        <motion.h2
          className='text-3xl md:text-4xl text-gray-800 font-bold mb-6 text-center'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          The Creator&apos;s Dilemma
        </motion.h2>
        <motion.div
          className=" my-10 flex flex-col max-w-6xl items-center  mx-auto md:flex-row gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
             {features.map((feature) => (
                <motion.div key={feature.title} variants={cardVariants} whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
                  <Card className='border border-red-200'>
                      <CardContent>
              <div className='text-3xl mb-4 bg-red-100 w-12 h-12 pt-2 text-center rounded-lg '>{feature.icon}</div>
              <h3 className='text-2xl font-bold mb-2 text-gray-700'>{feature.title}</h3>
              <p className='text-gray-500'>{feature.description}</p>
                      </CardContent>
             </Card>
                </motion.div>
             ) ) }
        </motion.div>
      

    </motion.div>
  )
}

export default CreatorCards