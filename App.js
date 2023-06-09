import 'react-native-gesture-handler';

//Entry
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<ContextProviders>
			<NavigationContainer>
				<StackNavigator/>
			</NavigationContainer>
		</ContextProviders>
	);
}

//Contexts
import { ColorProvider, useColorContext } from 'src/contexts/color-context';
import { EntryProvider } from 'src/contexts/entry-context';

const ContextProviders = ({ children }) => {
	return <ColorProvider>
		<EntryProvider>
			{children}
		</EntryProvider>
	</ColorProvider>
}

//Stack Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

import ColorBackHeader from 'src/components/color/color-back-header';

import NewTask from 'src/screens/entries/create/new-task';
import NewReminder from 'src/screens/entries/create/new-reminder';
import NewActivity from 'src/screens/entries/create/new-activity';

const Stack = createStackNavigator();

const StackNavigator = ()=>{
	const {targetColors} = useColorContext().colorData;

	return <Stack.Navigator 
		screenOptions={{
			headerBackgroundContainerStyle:targetColors.mainColor,
			header:props=><ColorBackHeader {...props}/>
		}}
	>
		<Stack.Screen name="Root" component={DrawerNavigator} options={{headerShown:false}}/>
		<Stack.Screen name="New Task" component={NewTask}/>
		<Stack.Screen name="New Reminder" component={NewReminder}/>
		<Stack.Screen name="New Activity" component={NewActivity}/>
	</Stack.Navigator>
}

//Drawer Navigator
import { createStackNavigator } from '@react-navigation/stack';

import ColorDrawer from 'src/components/color/color-drawer';
import ColorDrawerHeader from 'src/components/color/color-drawer-header';

import Home from 'src/screens/home';
import EntryList from 'src/screens/entries/list';
import Configurations from 'src/screens/configurations';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return <Drawer.Navigator 
        drawerContent={props=><ColorDrawer {...props}/>}
        screenOptions={{header:props=><ColorDrawerHeader {...props}/>}}
    >
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Entries" component={EntryList}/>
        <Drawer.Screen name="Configurations" component={Configurations}/>
    </Drawer.Navigator>
}