"use client"

import Image from 'next/image'
import { AlertCircle, ArrowLeft, CheckCircle, Mail } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { forgotPasswordSchema, ForgotPasswordFormData } from '../../lib/validation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {useAuthStore} from "../../store/useAuthStore"



function ForgotPasswordPage () {

const [serverError, setServerError] = useState('');
const [successMessage, setSuccessMessage] = useState('');

const {requestPasswordReset, isLoading} = useAuthStore();
const router = useRouter();


    const form = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
          defaultValues: {
      email: "",
    },
    });

    const {isSubmitting} = form.formState;

    const onSubmit = async (data: ForgotPasswordFormData) => {
        setServerError('');
        setSuccessMessage('');
    const result = await requestPasswordReset(data.email);

    if(result.success){
         setSuccessMessage(result.message || 'OTP sent to your email')
         setTimeout(() => {
            router.push('/reset-password')
         },1500 )
    }else{
        setServerError(result.message || 'Something went wrong')
    }
        
    }


    return (
       <div className='px-3'>
         <div className="border max-w-xl mx-auto p-8 mt-20 rounded-lg shadow-lg">
            <div >
                <Link href="/sign-in" className='text-brand flex items-center gap-2 mb-6 text-sm font-medium'>
                    <ArrowLeft />
                    <span>Back to Sign In</span>
                </Link>
            </div>
            <div>
                <Image src="/vibeNpay-white.png" alt="Vibenpay Logo" width={120} height={120} className="mx-auto rounded-lg mb-4" />
            </div>
            <div className='mb-6'>
                <h2 className='font-bold text-3xl text-gray-800 mb-4'>Reset Password</h2>
                <p className='text-md text-gray-500'>We will send an OTP to your email to verify your identity</p>
            </div>
            {/* Success Message */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                  {successMessage}
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {serverError && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-red-700 dark:text-red-300 text-sm font-medium">
                  {serverError}
                </p>
              </div>
            </div>
          )}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4' >

                    <FormField 
                    control={form.control}
                    name='email'
                    render={({field}) => (
                        <FormItem>
                             <FormLabel>Email Address</FormLabel>
                             <FormControl>
                                <div className="relative">
                                  <Input placeholder='you@example.com' {...field} type='email' className='pr-10'/>
                                  <Mail className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none' size={18}/>
                                </div>
                             </FormControl>
                             <FormMessage className='text-red-600' />
                        </FormItem>
                    ) }
                    >

                    </FormField>

                    <Button 
                     type="submit"
          className="w-full bg-brand text-white py-6 rounded-xl mt-4 hover:bg-brand-dark transition"
          disabled={isSubmitting || isLoading}
                    >
                        {isSubmitting || isLoading ? "Sending..." : "Send OTP"}
                    </Button>
                </form>
            </Form>
        </div>
       </div>
    )
}
export default ForgotPasswordPage;