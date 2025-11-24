"use client"
import { DollarSign, Play, Send } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

function Platform() {
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

  const highlights = [
    {
      title: "Social & Creator Hub",
      subtitle: "Your all-in-one platform for content and community",
      features: [
        "Upload and share short-form videos",
        "Gain 1,000 followers to unlock monetization", 
        "Earn $4 per 1,000 views per content",
        "Live bonuses, ad rewards & Creator's Day gifts"
      ],
      Icon:<Play />
    },
    {
      title: "Fintech & Payments",
      subtitle: "Borderless money made simple",
      features: [
        "Send and receive money globally",
        "Instant withdrawals with low fees",
        "Smart wallet with cross-border transfers",
        "Integrated brand payment system"
      ],
      Icon: <Send />
    },
    {
      title: "Crypto & Investment", 
      subtitle: "Invest and grow your wealth",
      features: [
        "Buy and sell crypto easily",
        "Invest directly from your wallet",
        "Portfolio tracking with real-time insights",
        "Crypto engagement & referral bonuses"
      ],
      Icon:<DollarSign />
    }
  ]

  return (
    <div className="w-full py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Platform Highlights
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Everything you need to succeed as a creator
          </p>
        </motion.div>

        {/* Highlights Section - Fixed for equal height */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-center items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              className="flex-1 border hover:border-brand rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-xl duration-200  min-h-[400px]"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-brand text-3xl shadow">
                {highlight.Icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                {highlight.title}
              </h2>
              <p className="text-sm text-gray-500 mb-6 text-center">
                {highlight.subtitle}
              </p>
              <div className="space-y-3 w-full flex-1">
                {highlight.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <span className="text-blue-700 mr-3 mt-1">✓</span>
                    <p className="text-gray-700 text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Platform