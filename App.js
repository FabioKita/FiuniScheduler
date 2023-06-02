import 'react-native-gesture-handler';

//Entry
export default function App() {
  return (
    <ContextProviders>
      <Navigator/>
    </ContextProviders>
  );
}

//Color
const ContextProviders = ({children})=>{
  return <ColorProvider>
    {children}
  </ColorProvider>
}

//Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from 'src/screens/home';
import Entries from 'src/screens/entries';
import { ColorProvider } from 'src/contexts/color-context';

const Drawer = createDrawerNavigator();

const Navigator = ()=>{
  return <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Entries" component={Entries} />
    </Drawer.Navigator>
  </NavigationContainer>
}

