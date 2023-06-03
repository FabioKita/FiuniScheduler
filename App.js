import 'react-native-gesture-handler';

//Entry
import { NavigationContainer } from '@react-navigation/native';

const myTheme = DefaultTheme//{...DefaultTheme, colors:{...DefaultTheme.colors, primary:"#ff0000"}};

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

const ContextProviders = ({ children }) => {
  return <ColorProvider>
    {children}
  </ColorProvider>
}

//Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from 'src/screens/home';
import Entries from 'src/screens/entries';
import Config from 'src/screens/config';
import ColorHeaderBackground from 'src/components/color-header-background';
import { DefaultTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return <Drawer.Navigator screenOptions={{
      headerBackground: ()=><ColorHeaderBackground/>
    }}>
        <Drawer.Screen name="Home" component={Home} options={{color:"#FFFFFF"}}/>
        <Drawer.Screen name="Entries" component={Entries} options={{headerStyle:{elevation:0, shadowOpacity:0}}}/>
        <Drawer.Screen name="Config" component={Config}  options={{color:"#FFFFFF"}} />
    </Drawer.Navigator>
}