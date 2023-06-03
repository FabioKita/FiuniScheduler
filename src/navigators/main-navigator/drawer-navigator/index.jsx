import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ColorHeader from "./color-header";
import Home from "src/screens/home";
import Entries from "src/screens/entries";
import Config from "src/screens/config";
import ColorDrawer from "./color-drawer";


const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{

    return <Drawer.Navigator
        drawerContent={props=><ColorDrawer {...props}/>}
        screenOptions={{
            header:props=><ColorHeader {...props}/>
        }}
    >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Entries" component={Entries}/>
        <Drawer.Screen name="Config" component={Config}/>
    </Drawer.Navigator>
}

export default DrawerNavigator;