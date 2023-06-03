import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { useNavigationContext } from "../main-navigator-context/main-navigator-context";
import forFade from './for-fade';

import Home from 'src/screens/home';
import Entries from 'src/screens/entries';
import Config from 'src/screens/config';

const Stack = createStackNavigator();

const StackNavigator = ()=>{
    const {setSelectedTab} = useNavigationContext();

    return <Stack.Navigator 
        screenOptions={{ headerShown: false, cardStyleInterpolator: forFade }}
        screenListeners={{
            state:(e)=>{
                const state = e.data.state;
                setSelectedTab(state.routeNames[state.index])
            }
        }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Entries" component={Entries} />
		<Stack.Screen name="Config" component={Config} />
    </Stack.Navigator>
}

export default StackNavigator;