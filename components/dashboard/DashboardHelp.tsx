

import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import Link from 'next/link';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {DashboardFAQItems} from "../../data/data"



function DashboardHelp() {

const supportChannels = [
  {
    title: "Email Support",
    description: "support@vibenpay.com",
    icon: Mail,
    actionText: "Send Email",
    actionLink: "mailto:support@vibenpay.com",
  },
  {
    title: "Live Chat",
    description: "Average reply: 2 minutes",
    icon: MessageSquare,
    actionText: "Start Chat",
    actionLink: "#chat",
  },
  {
    title: "Phone Support",
    description: "+1 (555) 000-0000",
    icon: Phone,
    actionText: "Call Now",
    actionLink: "tel:+15550000000",
  }
] as const;


  return (
    <div className='py-16'>
      <div className='flex flex-col md:flex-row gap-6 items-center justify-center text-center max-w-6xl mx-auto px-4'>
        {supportChannels.map((channel) => (
            <div key={channel.title} className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 w-full md:w-80'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='p-3 bg-brand/10 dark:bg-darkbg/10 rounded-full'>
                        <channel.icon className='h-8 w-8 text-brand dark:text-darkbg' />
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-lg text-gray-900 dark:text-white'>{channel.title}</h2>
                        <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>{channel.description}</p>
                    </div>
                    <Separator className='my-2 w-full' />
                <Button asChild variant="outline" className='w-full text-brand dark:text-darkbg border-brand dark:border-darkbg hover:bg-brand hover:text-white dark:hover:bg-darkbg dark:hover:text-white transition-colors duration-200 font-medium'>
                    <Link href={channel.actionLink}>{channel.actionText}</Link>
                </Button>
                </div>
                
                
            </div>
        ) )}
      </div>

<Separator className='my-5 w-full' />

      <div>
        {/* FAQ Section */}
        <div className='max-w-4xl mx-auto mt-16 px-4'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center'>Frequently Asked Questions</h2></div>
            <Accordion type="single" collapsible className='max-w-4xl mx-auto space-y-4 px-4 mb-16'>
                {DashboardFAQItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className='border border-gray-200 dark:border-gray-700 rounded-lg'>
                        <AccordionTrigger className='flex justify-between items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-md font-semibold'>
                            <span className='font-medium text-gray-900 dark:text-white'>{item.question}</span>
                           
                        </AccordionTrigger>
                        <AccordionContent className='px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-b-lg'>
                            <p className='text-gray-700 dark:text-gray-300'>{item.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
      </div>
    </div>
  )
}

export default DashboardHelp