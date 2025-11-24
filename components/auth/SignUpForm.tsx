"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { Eye, EyeClosed } from "lucide-react"
import Link from 'next/link'

function SignUpForm() {

      const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }


  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Sign Up Form */}
       <div className="flex-1 bg-brand text-white hidden lg:flex items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div>
            <Image 
              src="/vibeNpay-white.png"
              alt='vibeNpay Logo'
              width={100}
              height={100}
              className='mx-auto rounded-lg mb-4'
            />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Professional Finance, Simplified
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Send money, trade crypto, and connect with professionals—all in one secure platform
          </p>
        </div>
      </div>


      {/* Right Side - Brand Message */}

<div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <div>
              <Image 
                src="/vibeNpay-blue.png"
                alt='vibeNpay Logo'
                width={100}
                height={100}
                className='mx-auto rounded-lg'
              />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-gray-700">
              Join Vibenpay Today
            </CardTitle>
            <CardDescription className="text-center text-gray-500">
              Start your journey to smarter finance and professional connections
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Divider */}
            <Separator className="my-2" />

            {/* Form Title */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">Create Account</h3>
              <p className="text-sm text-gray-500 mt-1">
                Join Vibenpay and start managing your finances
              </p>
            </div>

            {/* Full Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                className="w-full"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full"
              />
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                Password
              </Label>
              <div className='relative'>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full"
                />
                <Button 
                  type="button"
                  variant="ghost" 
                  size="sm"
                  onClick={togglePassword} 
                  className='absolute top-0 right-0 h-full px-3 hover:bg-transparent'
                >
                  {showPassword ? 
                    <Eye className='w-5 h-5 text-gray-800' /> : 
                    <EyeClosed className='w-5 h-5 text-gray-400' />
                  }
                </Button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-gray-500">
                I agree to the{" "}
                <Button variant="link" className="p-0 h-auto text-blue-700 font-normal">
                  Terms of Service
                </Button>{" "}
                and{" "}
                <Button variant="link" className="p-0 h-auto text-blue-700 font-normal">
                  Privacy Policy
                </Button>
              </Label>
            </div>

            {/* Divider */}
            <Separator className="my-6" />

            {/* Create Account Button */}
            <Button className="w-full text-gray-200 font-medium text-md bg-brand">
              Create Account
            </Button>

            {/* Sign In Link */}
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Button variant="link" className="p-0 h-auto text-blue-700 font-semibold">
               <Link href="/sign-in" > Sign in here</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>


     
    </div>
  )
}

export default SignUpForm