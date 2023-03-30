import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-navigation/native-stack';

import CountriesList from './screens/countries';
import CitiesList from './screens/cites';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Countires" component={CountriesList} />
                <Stack.Screen name="Cities" component={CitiesList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;