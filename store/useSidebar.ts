
import {create} from "zustand";
import {persist} from "zustand/middleware";


interface SidebarState {
    activeTab:"home" | "explore" | "finance" | "crypto" | "profile" |"help" | "chat" | "notifications";
    setActiveTab:(tab:SidebarState["activeTab"]) => void;
}

export const useSidebarStore = create<SidebarState>()(
    persist(
(set)=> ({
activeTab: "home",
setActiveTab: (tab) => set({activeTab: tab}),
}),
 {
    name:"sidebar-tabs"
 }
    )
)