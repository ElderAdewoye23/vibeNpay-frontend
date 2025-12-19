
import React from 'react'
import { Button } from '../ui/button'
import {useExploreStore, type ExploreTab} from "../../store/useExploreStore"


function Tabs() {

    const {activeTab, setActiveTab} = useExploreStore();

const TABS = [
  { id: 'all', label: 'All'},
  { id: 'trending', label: 'Trending' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'anime', label: 'Anime & Comics' },
  { id: 'crypto', label: 'Crypto' },
  { id: 'finance', label: 'Finance' },
] as const

  return (
    <div>
<div className="flex flex-wrap justify-center gap-2 md:gap-4 bg-gray-300 dark:bg-gray-800 p-4 rounded-lg">
    {TABS.map((tab) => (
            <Button key={tab.id} className={` ${activeTab === tab.id ? 'bg-brand text-white dark:bg-darkbg dark:text-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}  `} onClick = {() => setActiveTab(tab.id) } >
                {tab.label}
            </Button>
    ) ) }
</div>
    </div>
  )
}

export default Tabs