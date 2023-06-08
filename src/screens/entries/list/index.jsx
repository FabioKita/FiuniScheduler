import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Tasks from "./tasks";
import Activities from "./activities";
import Reminders from "./reminders";
import ColorTabBar from "src/components/color/color-tab-bar";

import useSetColor from "src/hooks/use-set-color";
import ColorContainer from "src/components/color/color-container";

const Tab = createMaterialTopTabNavigator();

const EntryList = ()=>{
    useSetColor({mainColor:"#E9887F"})

    return <ColorContainer>
        <Tab.Navigator
            tabBar={props=><ColorTabBar {...props}/>}
            sceneContainerStyle={{backgroundColor:"transparent"}}
            screenOptions={{
                tabBarStyle:{backgroundColor:"transparent"}
            }}
        >
            <Tab.Screen name="Tasks" component={Tasks}/>
            <Tab.Screen name="Activities" component={Activities}/>
            <Tab.Screen name="Reminders" component={Reminders}/>
        </Tab.Navigator>
    </ColorContainer>
}

export default EntryList;