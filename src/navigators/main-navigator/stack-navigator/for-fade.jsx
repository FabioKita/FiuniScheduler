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

export default forFade;