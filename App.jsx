// src/App.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Correct import
import HomeScreen from './src/screens/HomeScreen'; // Updated path
import AboutScreen from './src/screens/AboutScreen'; // Updated path

const Stack = createNativeStackNavigator(); // Correct function

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
