import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/MenuScreen';

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="GROUP 4 LIST" component={MenuScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    );
   }
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#000000',
    alignItems: 'center',
   justifyContent: 'center',
  },
  setColor : {
    color: '#fff',
  },
  setFontSize: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  setColors : {
    color: '#fff',
  }
});
