import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import HomeScreen from './screens/HomeScreen.js';
import PokemonScreen from './screens/PokeScreen.js';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor: 'tomato',}}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            //headerShown: false
          }} 
        />  
        <Tab.Screen 
          name="Pokemon" 
          component={PokemonScreen}
          options={{
            tabBarLabel: 'Pokemon',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dog" color={color} size={size} />
            ),
            //headerShown: false
          }} 
        />
      </Tab.Navigator>
    );
  }

export default function Navigation() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }