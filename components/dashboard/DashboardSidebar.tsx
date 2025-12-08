"use client"
import { 
  Home, 
  Compass, 
  TrendingUp, 
  Bitcoin, 
  User,
 
} from 'lucide-react';


import {useSidebarStore} from "../../store/useSidebar"
import { Button } from '../ui/button';


function DashboardSidebar() {

const sideBarItems = [
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

const {activeTab, setActiveTab} = useSidebarStore();

  return (
    <aside className='w-60 p-4 sticky top-0 bg-gray-100 dark:bg-gray-800 h-screen border-r border-gray-200 dark:border-gray-800'>
       <nav className='flex flex-col items-center justify-center space-y-6 py-4 '>
        {
          sideBarItems.map((item) => (
            <Button key={item.id} onClick={()=> setActiveTab(item.id) } className={`hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 w-full px-3 py-2 rounded-md transition flex items-center gap-3  text-md  ${ activeTab === item.id && 'bg-brand hover:bg-brand-dark text-white dark:bg-darkbg dark:text-black dark:hover:bg-darkbg-thicker'  } `} >
              {item.icon}
              <span>{item.label}</span>
            </Button>
          ) )
        }
       </nav>
    </aside>
  )
}

export default DashboardSidebar