import 'react-native-gesture-handler';


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

//Contexts
import { ColorProvider } from 'src/contexts/color-context';
import { EntryProvider } from 'src/contexts/entry-context';

const ContextProviders = ({ children }) => {
	return <ColorProvider>
		<EntryProvider>
			{children}
		</EntryProvider>
	</ColorProvider>
}