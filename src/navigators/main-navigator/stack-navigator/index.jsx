import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import ColorHeader from "./color-header";

const Stack = createStackNavigator();

const StackNavigator = ({
	navigation,
	screens
})=>{
    return <Stack.Navigator
        screenOptions={{
            header:props=><ColorHeader {...props} navigation={navigation}/>,
            cardStyleInterpolator:forFade
        }}
    >
        {screens.map(screen=><Stack.Screen {...screen}/>)}
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