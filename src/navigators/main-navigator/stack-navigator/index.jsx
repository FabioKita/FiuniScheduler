import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigator = ({
	screenData
})=>{

    return <Stack.Navigator>
        {screenData.screens.map((screen, index)=><Stack.Screen 
			{...screen} 
			key={screen.name} 
			listeners={{
				focus:()=>screenData.setFocusedIndex(index)
			}}
			options={{
				headerShown:false,
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