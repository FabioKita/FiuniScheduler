import React, { useMemo, useState } from "react";
import DrawerNavigator from "./drawer-navigator";

import Home from "src/screens/home";
import Entries from "src/screens/entries";
import Config from "src/screens/config";

const MainNavigator = ()=>{
    const screens = useMemo(()=>[
        {name:"Home", component:Home},
        {name:"Entries", component:Entries},
        {name:"Config", component:Config}
    ], []);

    const [focused, setFocused] = useState("Home");

    const screenData = {
        screens,
        focused,
        setFocused
    };

    return <DrawerNavigator screenData={screenData}/>
}

export default MainNavigator;