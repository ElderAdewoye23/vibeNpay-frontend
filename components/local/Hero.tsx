"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import {buttons} from "../../data/data"


function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
 
  return (
    <motion.div
      className='bg-gradient-to-t from-white to-brand-hero md:bg-brand-hero '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
        <motion.div
          className='text-5xl md:text-7xl text-center font-bold mb-6 mt-10 pt-20'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
            <h1>Connect. Create.</h1>
            <h2> <span className="text-brand">Earn.</span> Invest.</h2>
        </motion.div>

        <motion.div
          className='text-center max-w-2xl mx-auto px-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <p className='text-gray-500 text-xl font-medium leading-relaxed'>
                VibenPay is a social fintech platform for creators — simplifying borderless transactions, global earning, and crypto investments all in one place.
            </p>
        </motion.div>

        <motion.div
          className='mx-auto text-center mt-16 px-4 flex flex-col md:flex-row gap-6 justify-center items-center w-full md:gap-6'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {buttons.map((button) => (
            <motion.div key={button.label} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='w-full md:w-auto'>
              <Button
                className={`${button.className} w-full md:w-auto px-8 py-3 md:px-6 md:py-2`}
                variant={button.variant}
              >
                <a href={button.href}>{button.label}</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default Hero