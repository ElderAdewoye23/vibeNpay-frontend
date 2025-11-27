"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { footerLinks } from '../../data/data'

function Footer() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  }

  return (
    <motion.footer className="w-full bg-gray-900 text-white" initial="hidden" animate="show" variants={container}>
      
      {/* Top Section - CTA */}
      <motion.div className="bg-gradient-to-r from-brand to-brand-dark py-16" variants={item}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Creative Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators already earning, transacting globally, and building wealth with VibenPay
          </p>
          <button className="bg-white text-brand px-8 py-3 rounded-lg font-semibold text-md hover:bg-gray-200  transition-colors">
            Get Early Access Now
          </button>
        </div>
      </motion.div>

      {/* Divider Line */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Section - Links & Info */}
      <motion.div className="py-12" variants={item}>
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Brand Section */}
          <motion.div className="text-center mb-8" variants={item}>
            <h3 className="text-2xl font-bold mb-2">VibenPay</h3>
            <p className="text-gray-400">Connect. Create. Earn. Invest.</p>
          </motion.div>

          {/* Links Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 md:border-none gap-8 mb-8 border border-white rounded-lg text-center p-2 justify-items-center" variants={item}>
            
            {/* Product Column */}
            <div>
              <h4 className="font-semibold text-gray-300 mb-4">Product</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold text-gray-300 mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-semibold text-gray-300 mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empty column for spacing */}
            <div className="hidden md:block"></div>

          </motion.div>

          {/* Copyright */}
          <motion.div className="text-center border-t border-gray-800 pt-8" variants={item}>
            <p className="text-gray-400">
              © 2025 VibenPay. All rights reserved. Empowering creators worldwide.
            </p>
          </motion.div>

        </div>
      </motion.div>

    </motion.footer>
  )
}

export default Footer