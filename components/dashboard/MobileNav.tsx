"use client"
import { 
  Home, 
  Compass, 
  TrendingUp, 
  Bitcoin, 
  User,
} from 'lucide-react'
import { useSidebarStore } from '@/store/useSidebar'
import React from 'react'
import { Button } from '../ui/button';

function MobileNav() {
    
const {activeTab, setActiveTab} = useSidebarStore();

const mobileNavItems = [
    {
        id: "home",
        label: 'Home',
        icon: <Home size={20}/>
    },
    {
      id: "explore",
      label: 'Explore',
      icon: <Compass size={20}/>
    },
    {
      id:"finance",
      label: 'Finance',
      icon: <Bitcoin size={20}/>

    },
    {
      id:"crypto",
      label: 'Crypto',
      icon: <TrendingUp size={20}/>

    },{
      id:"profile",
      label: 'Profile',
      icon: <User size={20}/>

    }
] as const;

  return (
   
<nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800 md:hidden">
  <div className="flex items-center justify-between space-x-1 py-2 px-2">
    {mobileNavItems.map((item) => (
        <Button key={item.id} onClick={()=> setActiveTab(item.id) } className={`flex-1 px-3 py-2 rounded-md transition flex flex-col items-center justify-center text-sm ${ activeTab === item.id ? 'text-brand dark:text-darkbg' : 'text-gray-500' }`} >
          {item.icon}
          <span>{item.label}</span>
        </Button>
    )    )}
  </div>
</nav>
 
  )
}

export default MobileNav