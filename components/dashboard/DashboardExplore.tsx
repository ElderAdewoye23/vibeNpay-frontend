"use client"

import React from 'react'
import { Input } from '../ui/input'
import {Camera, CircleAlert, Plus } from "lucide-react"
import Tabs from '../explore/Tabs'
import ExploreFeed from '../explore/ExploreFeed'
import { Button } from '../ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

function DashboardExplore() {
  return (
    <div className='relative pt-6 pb-16 '>
      <div className='mx-auto max-w-3xl '>
         <div className='sticky top-0 mx-auto max-w-3xl bg-gray-200 dark:bg-gray-800 dark:text-gray-50 p-8 rounded-lg mb-6 z-10 '>
           <h1> Explore</h1>
           <Input placeholder="Search creators, posts, and more..." className="mt-4 bg-white dark:bg-gray-700" />
         </div>

        <div className='mt-4'>
             <div className='border-2 mx-auto max-w-2xl bg-yellow-100 rounded-xl p-2'>
            <div className='flex items-center gap-2 py-2 px-4'>
                <span><CircleAlert size={20} className='text-orange-400' /></span>
                <h2 className='text-orange-800 text-sm font-semibold'>Community Standards </h2>
            </div>
            <p className='text-orange-800 text-xs max-w-xl px-4'>Our platform does not allow explicit or sensitive content. This includes naked imagery, adult content, or any material that violates our community guidelines. All uploads are reviewed for compliance.</p>
         </div>
        </div>
        {/* Tabs */}
        <div className='mx-auto p-4'>
          <Tabs />
          <ExploreFeed />
        </div>
        

    </div>

{/* Absolute icon */}
<div className=' fixed bottom-8 right-8 flex flex-col items-center gap-2 cursor-pointer mb-10'>
  <Button className='w-14 h-14 bg-red-600 flex items-center rounded-full justify-center'>
    <Camera size={32} className='text-white' />
  </Button>
  <Button className='bg-brand dark:bg-darkbg w-14 h-14 text-center rounded-full flex items-center justify-center'>
    <Plus size={32} className='text-white' />
  </Button>
</div>

    </div>
  )
}

export default DashboardExplore