import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Tabs from './screens/hometabs';
import CricketGame from './screens/CricketGame';
import GolfGame from './screens/GolfGame';
import Golf from './screens/Golf';
import Cricket from './screens/Cricket';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name="Main" component={Tabs} options={{ title: 'FOKFTLE' }} />
        <Stack.Screen name="Golf" component={Golf} />
        <Stack.Screen name="Cricket" component={Cricket} />
        <Stack.Screen name="CricketGame" component={CricketGame} />
        <Stack.Screen name="GolfGame" component={GolfGame} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;