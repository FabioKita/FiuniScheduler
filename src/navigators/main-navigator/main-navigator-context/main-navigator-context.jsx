import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const useNavigationContext = ()=>{
    return useContext(NavigationContext);
}

const tabs = [
    "Home",
    "Entries",
    "Config"
];

export const NavigationProvider = ({children})=>{

    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    
    return <NavigationContext.Provider value={{
        tabs,
        selectedTab,
        setSelectedTab
    }}>
        {children}
    </NavigationContext.Provider>
}