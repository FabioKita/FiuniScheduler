import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigator from "../stack-navigator";
import ColorDrawer from "./color-drawer";
import ColorHeader from "./color-header";
import { useNavigationContext } from "../main-navigator-context/main-navigator-context";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{

    const {selectedTab, tabs} = useNavigationContext();

    return <Drawer.Navigator 
        drawerContent={props=><ColorDrawer 
            selectedTab={selectedTab}
            tabs={tabs}
            {...props}
        />} 
        screenOptions={{
            header:props=><ColorHeader {...props}/>
        }}
    >
        <Drawer.Screen name="Root" component={StackNavigator}/>
    </Drawer.Navigator>
}

export default DrawerNavigator;