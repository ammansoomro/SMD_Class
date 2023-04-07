import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CountriesList from './screens/countries';
import CitiesList from './screens/cites';
import Tabs from './screens/hometabs';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Tabs} options={{ title: 'Home' }}/>
        <Stack.Screen name="Countries" component={CountriesList} />
        <Stack.Screen name="Cities" component={CitiesList} options={{ title: 'Cites of a COUNTRY' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;