import 'react-native-gesture-handler';

//Contexts
import { ColorProvider } from 'src/contexts/color-context';

const ContextProviders = ({ children }) => {
	return <ColorProvider>
		{children}
	</ColorProvider>
}

//Entry
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from 'src/navigators/main-navigator';

export default function App() {
	return (
		<ContextProviders>
			<NavigationContainer>
				<MainNavigator/>
			</NavigationContainer>
		</ContextProviders>
	);
}