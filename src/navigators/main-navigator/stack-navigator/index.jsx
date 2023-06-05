import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerColorHeader from "./drawer-color-header";
import StackColorHeader from "./stack-color-header";

const Stack = createStackNavigator();

const StackNavigator = ({
	navigation,
	screenData
})=>{
	const getHeaderType = (screen)=>{
		return screen.options?.headerType??"menu";
	}

	const getHeader = (props, screen)=>{
		const headerType = getHeaderType(screen);
		if(headerType == "back"){
			return <StackColorHeader
				screenData={screenData}
				stackNavigation={props.navigation}
			/>
		}else{
			return <DrawerColorHeader
				screenData={screenData}
				drawerNavigation={navigation}
			/>
		}
	}

    return <Stack.Navigator>
        {screenData.screens.map((screen, index)=><Stack.Screen 
			{...screen} 
			key={screen.name} 
			listeners={{
				focus:()=>screenData.setFocusedIndex(index)
			}}
			options={{
				header:props=>getHeader(props, screen),
				cardStyleInterpolator:forFade
			}}
		/>)}
    </Stack.Navigator>
}

export default StackNavigator;

//Animation
import { Animated } from 'react-native';

const forFade = ({ current, next }) => {
	const progress = Animated.add(
		current.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		}),
		next ? next.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 1],
			extrapolate: 'clamp',
		}) : 0
	);

	return {
		cardStyle: {
			opacity:progress.interpolate({
				inputRange:[0, 1, 2],
				outputRange:[0, 1, 0]
			})
		},
	}
}