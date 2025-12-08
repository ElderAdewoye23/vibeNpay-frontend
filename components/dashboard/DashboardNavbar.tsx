"use client"
import React from 'react'
import Image from 'next/image'
import vibeNpayLogo from '../../public/vibeNpay-white.png'
import {useAuthStore} from "../../store/useAuthStore"
import { Bell, CircleUser, MessageCircle, MessageCircleQuestionMark, Moon, Sun,  } from 'lucide-react'

function DashboardNavbar() {

    const { signOut,user} = useAuthStore()

const navItems = [
    {
        icon:<MessageCircleQuestionMark />
    },
    {
        icon:<MessageCircle />
    },
    {
        icon: <Bell />
    },
    {
        icon: <Moon />
    },
    {
        icon: <CircleUser />
    }
]

  return (
    <nav className='bg-gray-100 shadow-md py-2 w-full '>
       <div>

        {/* First side */}
        <div>
            <Image
            src={vibeNpayLogo}
            alt=''
            width={100}
            height={100}
             className="mix-blend-multiply"
            />
        </div>

        {/* second section */}
        <div>
            <h2><span>Hi, </span>
            <span>{user?.fullName} </span>
            </h2>
        </div>

        {/* Third section */}
        <div>

        </div>

       </div>

    </nav>
  )
}

export default DashboardNavbar