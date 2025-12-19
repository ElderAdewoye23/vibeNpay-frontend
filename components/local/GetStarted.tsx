
"use client"
import React from 'react'
import { motion } from 'framer-motion'
import {creatorSteps} from "../../data/data"
import { Button } from '../ui/button'
import Link from 'next/link'


function GetStarted() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div className="w-full py-12 " initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
       <div>
        {/* heading */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get Started in 5 Simple Steps</h1>
            <p className="text-md md:text-lg text-gray-600">Join thousands of creators earning with VibenPay</p>
        </motion.div>
 {/* steps */}
        <motion.div className='flex flex-col md:flex-row justify-center items-center md:space-x-6 gap-8 mb-10' variants={containerVariants}>
            {creatorSteps.map((step) => (
                <motion.div key={step.title} className="flex flex-col items-center text-center gap-4 w-full md:w-auto" variants={itemVariants} whileHover={{ y: -6 }}>
                  
                     <div className='bg-brand w-12 h-12 flex items-center justify-center font-bold text-white rounded-full'>
                       {step.step}
                     </div>
                     {/* <span className="hidden md:inline-block w-14 h-px bg-gray-400 ml-6"></span> */}
                  
                   <span className='text-4xl'>{step.icon}</span>
                   <h2 className='font-bold text-gray-800 text-lg'>{step.title}</h2>
                   <p className='text-xs text-gray-500 max-w-[150px]'>{step.description}</p>
                </motion.div>
            ))}
        </motion.div>

        <motion.div className='text-center mt-6' variants={itemVariants}>
            <Button className='bg-brand text-white mx-auto '> 
            <Link href="/sign-up">
            Join 10,000+ Early Creators Building Wealth
            </Link>
        </Button>
        </motion.div>
       </div>

    </motion.div>
  )
}

export default GetStarted