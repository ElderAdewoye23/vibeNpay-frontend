"use client"
import { Send, TrendingUp, Video } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

function Partner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
     const partners = [
    {
      title: "Create & Earn",
      description: "Post videos, gain followers, and start monetizing.Earn $4 per 1,000 views instantly.",
      Icon: <Video />
    },
    {
      title: "Transact & Get Paid Instantly",
      description: "Send and receive money globally with low fees. Withdraw instantly to any bank account.",
      Icon: <Send />
    },
    {
      title: "Invest & Grow Wealth",
      description: "Invest your earnings in crypto or savings vaults. Watch your wealth grow with real-time insights.",
      Icon: <TrendingUp />
    }
  ]

  return (
    <motion.div className="w-full py-12 bg-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
      <motion.div className="max-w-4xl mx-auto px-4">
        
       
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Financial Partner
          </h1>
          <p className="text-md md:text-lg text-gray-500">
            VibenPay empowers African creators to earn instantly and grow financially
          </p>
        </motion.div>

      

        {/* Features Section */}
        <motion.div
          className="space-y-12 flex flex-col md:flex-row gap-8 justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => {

            const icon = partner.Icon;
            return (
              <motion.div
                key={partner.title}
                className="max-w-sm flex flex-col items-center  text-center p-4 space-y-6"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                 <p className="text-3xl p-3 rounded-lg font-semibold text-brand bg-blue-100">
                {icon}
              </p>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {partner.title}
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                {partner.description}
              </p>
             
            </motion.div>
            )
          } )}
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default Partner