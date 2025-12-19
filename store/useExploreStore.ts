
import {create} from 'zustand';

export type ExploreTab = 'all' | 'trending' | 'entertainment' | 'anime' | 'crypto' | 'finance';

interface ExploreState {
    activeTab: ExploreTab;
    setActiveTab: (tab: ExploreTab) => void;
}

export const useExploreStore = create<ExploreState>((set) => ({
    activeTab: 'all',
    setActiveTab: (tab) => set({ activeTab: tab }),
})

)