
"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator';
import Image from 'next/image'
import {ArrowLeft, Eye, EyeClosed  } from "lucide-react"
import Link from 'next/link'

function SignInForm() {

const [showPassword, setShowPassword] = useState<boolean>(false);

const togglePassword = () => {

    setShowPassword(prev => !prev);
}

  return (
    <div className="min-h-screen bg-gray-50 flex">
        
      {/* Left Side - Sign In Form */}
      
      <div className="flex-1 flex items-center justify-center p-8 relative">
         {/* Back to Home Button */}
        <Link href="/" className="absolute top-4 left-3 ">
          <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </Button>
        </Link>
        
        <Card className="w-full max-w-md">
        
          <CardHeader className="space-y-1">
            <div >
            
            <Image 
        src="/vibeNpay-blue.png"
        alt='vibeNpay Logo'
        width={100}
        height={100}
        className='mx-auto rounded-lg '
        />
        </div>
            <CardTitle className="text-2xl font-bold text-center text-gray-700">Welcome Back</CardTitle>
            <CardDescription className="text-center text-gray-500">
              Sign in to your Vibenpay account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
              <Button onClick={togglePassword} className='absolute top-0 right-2 '>
                {showPassword ? <Eye className='w-5 h-5 text-gray-800' /> : <EyeClosed className='w-5 h-5 text-gray-400' />}
              </Button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-gray-500">
                  Remember me
                </Label>
              </div>
              <Button variant="link" className="p-0 h-auto text-sm text-blue-700 ">
                Forgot password?
              </Button>
            </div>

            {/* Divider */}
            <Separator className="my-6" />

            {/* Sign In Button */}
            <Button className="w-full text-gray-200 font-medium text-md bg-brand hover:bg-brand-dark">
              Sign In
            </Button>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Button variant="link" className="p-0 h-auto text-blue-700 font-semibold">
               <Link href="/sign-up"> Sign up here</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Brand Message */}
      <div className="flex-1 bg-brand text-white hidden lg:flex items-center justify-center p-12">
        <div className="max-w-md text-center">
             <div >
            
            <Image 
        src="/vibeNpay-white.png"
        alt='vibeNpay Logo'
        width={100}
        height={100}
        className='mx-auto rounded-lg mb-4 '
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
    </div>
  )
}

export default SignInForm