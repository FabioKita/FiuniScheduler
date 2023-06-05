import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ColorDrawer from "./color-drawer";
import StackNavigator from "../stack-navigator";
import DrawerColorHeader from "./drawer-color-header";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({
    screenData
})=>{
    return <Drawer.Navigator
        drawerContent={props=><ColorDrawer {...props} screenData={screenData}/>}
        screenOptions={{header:props=><DrawerColorHeader screenData={screenData} drawerNavigation={props.navigation}/>}}
    >
        <Drawer.Screen name="Screens">
            {props=><StackNavigator {...props} screenData={screenData}/>}
        </Drawer.Screen>
    </Drawer.Navigator>
}

export default DrawerNavigator;