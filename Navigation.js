import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import HomeScreen from './screens/HomeScreen.js';
import PokemonScreen from './screens/PokeScreen.js';
import DigiScreen from './screens/DigiScreen.js';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator 
        initialRouteName='Home' 
        screenOptions={{
          tabBarActiveTintColor: '#006400',
          tabBarInactiveTintColor: '#393d42',
          tabBarStyle: { backgroundColor: '#9fa3a9' }
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerShown: false
          }} 
        />  
        <Tab.Screen 
          name="Pokemon" 
          component={PokemonScreen}
          options={{
            tabBarLabel: 'Pokemon',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alien-outline" color={color} size={size} />
            ),
            headerShown: false
          }} 
        />
        <Tab.Screen 
          name="Digimon" 
          component={DigiScreen}
          options={{
            tabBarLabel: 'Digimon',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="alien" color={color} size={size} />
            ),
            headerShown: false
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