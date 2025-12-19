"use client"
import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
import {useSidebarStore} from "../../store/useSidebar"
import DashboardHome from './DashboardHome';
import DashboardExplore from './DashboardExplore';
import DashboardHelp from './DashboardHelp';
import DashboardNotifications from './DashboardNotfications';


function DashboardMain() {
    const {activeTab} = useSidebarStore();

const renderContent = () => {
    switch (activeTab) {
        case "home":
            return <DashboardHome />
case "explore":
            return <DashboardExplore />;
            case "finance":
            return <div>Finance Content</div>;
            case "crypto":
            return <div>Crypto Content</div>;
            case "profile":
            return <div>Profile Content</div>;
            case "help":
            return <DashboardHelp />;
            case "chat":
            return <div>Chat Content</div>;
            case "notifications":
            return <DashboardNotifications />;
        default:
          return <DashboardHome />;
    }
}

  return (
    <div className='overflow-auto px-6 flex-1 dark:bg-gray-900 h-screen'>
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