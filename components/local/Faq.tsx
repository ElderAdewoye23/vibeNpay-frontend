
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {faqItems} from "../../data/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function Faq() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <div id="faq" className="w-full py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">

            {/* Heading  */}
            <motion.div
              className='text-center mb-12'
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  Everything you need to know about VibenPay
                </p>
            </motion.div>

            {/* FAQ Items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Accordion type='single' collapsible className="space-y-3 ">
                  {faqItems.map((item) => (
                      <motion.div key={item.id} variants={itemVariants}>
                        <AccordionItem
                          value={item.id}
                          className="border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-200 bg-gray-100"
                        >
                            <AccordionTrigger className="text-gray-800 font-semibold hover:text-brand text-sm transition-colors">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pt-2">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                  ) ) }
              </Accordion>
            </motion.div>
        </div>
    </div>
  )
}

export default Faq