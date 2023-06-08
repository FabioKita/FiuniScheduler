import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ColorDrawer from "./color-drawer";
import DrawerColorHeader from "./color-header";

import Home from "src/screens/home";
import Entries from "src/screens/entries";
import Configurations from "src/screens/configurations";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return <Drawer.Navigator 
        drawerContent={props=><ColorDrawer {...props}/>}
        screenOptions={{header:props=><DrawerColorHeader {...props}/>}}
    >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Entries" component={Entries}/>
        <Drawer.Screen name="Configurations" component={Configurations}/>
    </Drawer.Navigator>
}

export default DrawerNavigator;