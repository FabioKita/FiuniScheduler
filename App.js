import 'react-native-gesture-handler';

//Entry
import { NavigationContainer } from '@react-navigation/native';

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

import ColorHeader from 'src/components/color-header';
import Home from 'src/screens/home';
import Entries from 'src/screens/entries';
import Config from 'src/screens/config';

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return <Drawer.Navigator screenOptions={{
      header:({navigation, route, options})=>{
        return <ColorHeader navigation={navigation} route={route} options={options}/>
      }
    }}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Entries" component={Entries} options={{showShadow:false}}/>
        <Drawer.Screen name="Config" component={Config}/>
    </Drawer.Navigator>
}