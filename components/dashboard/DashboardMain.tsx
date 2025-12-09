"use client"
import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
import {useSidebarStore} from "../../store/useSidebar"
import DashboardHome from './DashboardHome';


function DashboardMain() {
    const {activeTab} = useSidebarStore();

const renderContent = () => {
    switch (activeTab) {
        case "home":
            return <DashboardHome />
case "explore":
            return <div>Explore Content</div>;
            case "finance":
            return <div>Finance Content</div>;
            case "crypto":
            return <div>Crypto Content</div>;
            case "profile":
            return <div>Profile Content</div>;
            case "help":
            return <div>Help & Support Content</div>;
            case "chat":
            return <div>Chat Content</div>;
            case "notifications":
            return <div>Notifications Content</div>;
        default:
          return <DashboardHome />;
    }
}

  return (
    <div className='overflow-auto p-6 flex-1 dark:bg-gray-900 h-screen'>
    <AnimatePresence mode="wait">
    <motion.div 
    key={activeTab}
        initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
    >
      {renderContent()}
    </motion.div>
    </AnimatePresence>
    </div>
  )
}

export default DashboardMain