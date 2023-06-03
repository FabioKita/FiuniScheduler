import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import Tasks from "./tasks";
import Activities from "./activities";
import Reminders from "./reminders";
import ColorTabBar from "src/components/color-tab-bar";

const Tab = createMaterialTopTabNavigator();

const Entries = ()=>{;
    return <Tab.Navigator tabBar={(props)=><ColorTabBar {...props}/>}>
        <Tab.Screen name="Tasks" component={Tasks} options={{color:"#FA7A6E"}}/>
        <Tab.Screen name="Activities" component={Activities} options={{color:"#91A7FF"}}/>
        <Tab.Screen name="Reminders" component={Reminders} options={{color:"#AED581"}}/>
    </Tab.Navigator>
}

export default Entries;