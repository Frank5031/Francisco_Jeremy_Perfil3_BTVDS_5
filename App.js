import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importar los iconos que desees usar

import Home from './src/BottomTab/Home';
import Profile from './src/BottomTab/Profile';
import Detail from './src/Stack/Detail';

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Estudiantes' component={StackNavigator} 
      options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name='Comidas favoritas' component={Profile}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name='food' color={color} size={26} />
        ),
      }}/>
    </Tab.Navigator>
  )
}

function StackNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Sobre Nosotros' component={Home}/>
      <Stack.Screen name='Detail' component={Detail}/>
    </Stack.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}