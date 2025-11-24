

import React from 'react'
import { motion } from 'framer-motion'
import {pricingPlans} from "../../data/data"
import { Button } from '../ui/button'

function HighlightPlatform() {
  return (
    <div className="w-full py-12 bg-gray-100" id="pricing">
        <div className="max-w-6xl mx-auto px-4">

            {/* Heading */}
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Simple, Transparent Pricing</h1>
               
                <p className="text-md md:text-lg text-gray-500 text-center">
                   Choose the plan that fits your journey
                </p>
            </div>

            {/* pricing plans */}
            <div className='flex flex-col md:flex-row justify-center items-stretch gap-8 mt-12'>
                {pricingPlans.map((plan) => (
                    <div key={plan.name} className={`flex flex-col items-start border min-h-[400px] rounded-2xl shadow-md p-8 flex-1 ${plan.styled ? "border-brand  border-2" : "border-gray-200 " } transition-transform hover:-translate-y-2 hover:shadow-xl duration-200  `} >
                        <div className='mb-3'>
                            <h1 className={` ${plan.styled ? "text-brand " : " text-gray-800"} font-bold text-2xl mb-2 `}>{plan.name}</h1>
                        <p className="text-sm text-gray-500 ">{plan.description}</p>
                        </div>

                        <div className=" mb-4">
                            <h2 className="text-4xl font-bold text-gray-900">{plan.price}</h2>
                            <span className="text-sm text-gray-500">{plan.billing}</span>
                        </div>
                        <div className="space-y-3 w-full flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start ">
                    <span className="text-blue-700 mr-3 ">✓</span>
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            <div className='w-full text-center' >
                  <Button className={` ${plan.styled ? "bg-brand text-white hover:bg-brand-dark": " border border-gray-200" } `}>{plan.cta}</Button>
            </div>
                    </div>
                ) )}
            </div>
        </div>
    </div>
  )
}

export default HighlightPlatform