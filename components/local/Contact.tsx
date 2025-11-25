

"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {contactFormSchema} from "../../schema/contactForm"
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import {socialLinks} from "../../data/data"


type ContactFormValues = z.infer<typeof contactFormSchema>

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    console.log(values)
    // Handle form submission here (send to API, email service, etc.)
    form.reset()
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "vibenpay@gmail.com",
      color: "bg-blue-100"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "07033073970, 07084345640",
      color: "bg-blue-100"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Lagos, Nigeria",
      color: "bg-blue-100"
    }
  ]

  
  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out to our support team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            
            {/* Contact Cards */}
            <div>
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-8"
                variants={itemVariants}
              >
                Contact Information
              </motion.h2>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow duration-200 flex items-start gap-4"
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                    >
                      <div className={`${info.color} w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0`}>
                        <IconComponent className="text-brand" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600">{info.details}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Follow Us Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                 
                  return (
                    <motion.button
                      key={index}
                      className="w-12 h-12  text-white rounded-full flex items-center justify-center  transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Image src={social.image} alt={social.label} width={30} height={30} />
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-8"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="border-gray-300 focus:ring-brand"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your@email.com"
                            type="email"
                            className="border-gray-300 focus:ring-brand"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Subject Field */}
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="How can we help?"
                            className="border-gray-300 focus:ring-brand"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message..."
                            className="border-gray-300 focus:ring-brand resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants} className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-brand text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Form>

          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Contact