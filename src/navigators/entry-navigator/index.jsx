import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import Tasks from "src/screens/entries/tasks";
import Activities from "src/screens/entries/activities";
import Reminders from "src/screens/entries/reminders";
import ColorTabBar from "./color-tab-bar";

const Tab = createMaterialTopTabNavigator();

const EntryNavigator = ()=>{
    

    return <Tab.Navigator 
        tabBar={(props)=><ColorTabBar {...props}/>} 
        sceneContainerStyle={{backgroundColor:"transparent"}}
        screenOptions={{
            tabBarStyle:{backgroundColor:"transparent"},
            lazy:true
        }}
    >
        <Tab.Screen 
            name="Tasks" 
            component={Tasks}
        />
        <Tab.Screen 
            name="Reminders" 
            component={Reminders}
        />
        <Tab.Screen 
            name="Activities" 
            component={Activities}
        />
    </Tab.Navigator>
}

export default EntryNavigator;