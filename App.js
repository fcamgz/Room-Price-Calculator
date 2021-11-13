import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from './screens/AboutScreen';
import MainScreen from './screens/MainScreen';

export default function App() {
  
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='MainPage'
          component={MainScreen}
        />
        <Drawer.Screen
          name='AboutPage'
          component={AboutScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
