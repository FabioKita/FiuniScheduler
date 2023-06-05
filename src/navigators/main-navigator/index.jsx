import React, { useMemo, useState } from "react";
import DrawerNavigator from "./drawer-navigator";

import Home from "src/screens/home";
import Entries from "src/screens/entries";
import Configurations from "src/screens/configurations";
import NewEntry from "src/screens/new-entry";

const MainNavigator = ()=>{
    const screens = useMemo(()=>[
        {name:"Home", component:Home},
        {name:"Entries", component:Entries},
        {name:"Configurations", component:Configurations, options:{
            headerType:"back"
        }},
        {name:"New Entry", component:NewEntry, options:{
            showInDrawer:false,
            headerType:"back"
        }},
    ], []);

    const [focused, setFocused] = useState(0);

    const setFocusedIndex = (index)=>{
        setFocused(index);
    }

    const screenData = {
        screens,
        focusedIndex:focused,
        focusedScreen:screens[focused],
        setFocusedIndex
    };

    return <DrawerNavigator screenData={screenData}/>
}

export default MainNavigator;