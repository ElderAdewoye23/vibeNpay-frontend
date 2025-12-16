"use client"
import React from 'react'
import Image from 'next/image'
import vibeNpayLogo from '../../public/vibeNpay-white.png'
import { useAuthStore } from "../../store/useAuthStore";
import {useSidebarStore} from "../../store/useSidebar";
import { 
  Bell, 
  CircleUser, 
  MessageCircle, 
  MessageCircleQuestionMark, 
  Moon, 
  Sun, 

  LogOut
} from 'lucide-react'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
 
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'


function DashboardNavbar() {
  const { signOut, user } = useAuthStore()
  const { theme, setTheme } = useTheme()
const {activeTab, setActiveTab} = useSidebarStore();
  const navItems: Array<{id: 'help' | 'chat' | 'notifications', icon: React.ReactNode, tooltip: string, hide?: boolean}> = [
    {
      id: 'help',
      icon: <MessageCircleQuestionMark size={20} />,
      tooltip: 'Help & Support',
      hide: true
    },
    {
      id: 'chat',
      icon: <MessageCircle size={20} />,
      tooltip: 'Chat',
      hide: true
    },
    {
      id: 'notifications',
      icon: <Bell size={20} />,
      tooltip: 'Notifications'
    },
  ] 

  const toggleTheme = () => {
    // Simple toggle between light and dark
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

//   // Get current theme icon
//   const getThemeIcon = () => {
//     if (theme === 'system') {
//       return systemTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />
//     }
//     return theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />
//   }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800 shadow-md py-4 px-6 w-full border-b border-gray-200 dark:border-gray-800'>
      <div className='flex justify-between items-center mx-auto '>
        {/* First side  */}
        <div className="flex items-center">
          <Image
            src={vibeNpayLogo}
            alt="VibenPay Logo"
            width={80}
            height={80}
            className={`${theme === 'dark' ? ' ' : 'mix-blend-multiply'} w-9 h-9 object-contain`}
          />
        </div>

        {/* Second section  */}
        <div className='hidden md:flex'>
          <h2 className='text-gray-800 dark:text-gray-200'>
            <span className='text-gray-600 dark:text-gray-400'>Hi, </span>
            <span className='font-semibold'>{user?.fullName } </span>
          </h2>
        </div>

        {/* Third section - Icons */}
        <div className='flex items-center '>
        <div>
              {navItems.map((item) => (
            <button
            onClick={() => setActiveTab(item.id)}
              key={item.id}
              type="button"
              aria-label={item.tooltip ?? `nav-item-${item.id}`}
              title={item.tooltip}
              className={` ${activeTab === item.id ? 'text-brand dark:text-darkbg' : 'text-gray-700 dark:text-gray-200 ' } relative p-2 rounded-full  hover:text-brand dark:hover:text-darkbg transition-colors duration-200 group ${
                item.hide ? 'hidden md:inline-flex' : 'inline-flex'
              } `}
            >
              {item.icon}
              {/* Notification badge example */}
              {item.id === "notifications" && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

          {/* Theme Toggle Button */}
          
          <div>
          <Button onClick={toggleTheme} className='w-8 h-8 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700'>
            {theme === "dark" ? <Sun size={20}  /> : <Moon size={20}  />}
          </Button>
          </div>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <CircleUser size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user?.fullName}</p>
                  <p className="text-xs leading-none text-gray-500 dark:text-gray-400">
                    {user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuItem 
                onClick={() => signOut()}
                className="text-red-600 focus:text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar