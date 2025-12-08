"use client"
import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
import {useSidebarStore} from "../../store/useSidebar"


function DashboardMain() {
    const {activeTab} = useSidebarStore();

const renderContent = () => {
    switch (activeTab) {
        case "home":
            return <div>Home Content</div>;
case "explore":
            return <div>Explore Content</div>;
            case "finance":
            return <div>Finance Content</div>;
            case "crypto":
            return <div>Crypto Content</div>;
            case "profile":
            return <div>Profile Content</div>;
        default:
          return <div>Home Content</div>;
    }
}

  return (
    <div className='overflow-auto p-6 flex-1'>
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