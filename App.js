import 'react-native-gesture-handler';

//Entry
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<ContextProviders>
			<NavigationContainer>
				<DrawerNavigator/>
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

//Main Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

import ColorDrawer from 'src/components/color/color-drawer';
import DrawerColorHeader from 'src/components/color/color-header';

import Home from 'src/screens/home';
import Entries from 'src/screens/entries';
import Configurations from 'src/screens/configurations';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return <Drawer.Navigator 
        drawerContent={props=><ColorDrawer {...props}/>}
        screenOptions={{header:props=><DrawerColorHeader {...props}/>}}
    >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Entries" component={Entries}/>
        <Drawer.Screen name="Configurations" component={Configurations}/>
    </Drawer.Navigator>
}