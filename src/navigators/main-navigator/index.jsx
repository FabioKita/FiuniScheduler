import React, { useMemo } from "react";
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

    return <DrawerNavigator screens={screens}/>
}

export default MainNavigator;