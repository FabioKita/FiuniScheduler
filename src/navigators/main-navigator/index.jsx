import React from "react";
import DrawerNavigator from "./drawer-navigator";
import { NavigationProvider } from "./main-navigator-context/main-navigator-context";

const MainNavigator = ()=>{
    return <NavigationProvider>
        <DrawerNavigator/>
    </NavigationProvider>
}

export default MainNavigator;