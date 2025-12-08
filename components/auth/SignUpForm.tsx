"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { Eye, EyeClosed, ArrowLeft, XCircle } from "lucide-react"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import {signUpFormData, signUpSchema} from "../../lib/validation/auth"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {useAuthStore} from "../../store/useAuthStore"
import { PasswordStrength } from '../local/PasswordStrength'


function SignUpForm() {

  const router = useRouter()

  const {signUp} = useAuthStore();

      const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }

  const {register, handleSubmit, formState:{errors, isSubmitting},setValue,watch ,reset} = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      agreeToTerms: false,
    }
  })

   const agreeToTerms = watch('agreeToTerms')
   const password = watch('password')


  const onSubmit = (data: signUpFormData) => {
    signUp("mock-token", {
    id: "user_" + Date.now(),
    fullName: "John Doe",
    email: data.email,
  });
    reset()
    router.push("/dashboard");

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

<div className="flex-1 flex items-center justify-center p-8 relative">
        {/* Back to Home Button */}
        <Link href="/" className="absolute top-4 left-3 ">
          <Button variant="outline" size="icon" className="rounded-full border-gray-300 hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4 text-gray-700" />
          </Button>
        </Link>

        <Card className="w-full max-w-md mt-5">
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
             <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("fullName")}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p> }
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
                {...register("email")}
              
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p> }
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
                {...register("phone")}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p> }
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
                  {...register("password")}
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

              {password && <PasswordStrength password={password} />}
               {errors.password && (
                  <div className="mt-2 space-y-1">
                    {errors.password.message?.split('. ').map((message, index) => (
                      message && (
                        <div key={index} className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-red-500">{message}</span>
                        </div>
                      )
                    ))}
                  </div>
                )}
            </div>

            {/* Terms Agreement */}
            <div className="flex flex-col md:flex-row items-center  space-x-1">
            <div className='flex items-center gap-2'>
                <Checkbox id="terms" className='border-2' {...register("agreeToTerms")} checked={agreeToTerms} onCheckedChange={(checked) => setValue('agreeToTerms', checked as boolean)} />
              <Label htmlFor="terms" className="text-sm text-gray-500">
                I agree to the
              </Label>
              
            </div>
              <Label>
                 <Button variant="link" className="p-0 h-auto text-blue-700 font-normal">
                  Terms of Service
                </Button>
                and
                <Button variant="link" className="p-0 h-auto text-blue-700 font-normal">
                  Privacy Policy
                </Button>
              </Label>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms.message}</p>
              )}

            </div>

            {/* Divider */}
            <Separator className="my-6" />

            {/* Create Account Button */}
            <Button type='submit' className="w-full text-gray-200 font-medium text-md bg-brand hover:bg-brand-dark"
            disabled={!agreeToTerms || isSubmitting }
            >
              {isSubmitting  ? 'Creating Account...' : 'Create Account'}
            </Button>

            {/* Sign In Link */}
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Button variant="link" className="p-0 h-auto text-blue-700 font-semibold">
               <Link href="/sign-in" > Sign in here</Link>
              </Button>
            </div>
             </form>
          </CardContent>
         
        </Card>
      </div>


     
    </div>
  )
}

export default SignUpForm