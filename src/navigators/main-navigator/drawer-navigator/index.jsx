import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ColorDrawer from "./color-drawer";
import StackNavigator from "../stack-navigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({
    screens
})=>{
    return <Drawer.Navigator
        drawerContent={props=><ColorDrawer {...props} screens={screens}/>}
        screenOptions={{headerShown:false}}
    >
        <Drawer.Screen name="Screens">
            {props=><StackNavigator screens={screens} {...props}/>}
        </Drawer.Screen>
    </Drawer.Navigator>
}

export default DrawerNavigator;