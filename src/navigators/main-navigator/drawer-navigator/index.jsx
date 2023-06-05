import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ColorDrawer from "./color-drawer";
import StackNavigator from "../stack-navigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({
    screenData
})=>{
    return <Drawer.Navigator
        drawerContent={props=><ColorDrawer {...props} screenData={screenData}/>}
        screenOptions={{
            headerShown:false
        }}
    >
        <Drawer.Screen name="Screens">
            {props=><StackNavigator {...props} screenData={screenData}/>}
        </Drawer.Screen>
    </Drawer.Navigator>
}

export default DrawerNavigator;