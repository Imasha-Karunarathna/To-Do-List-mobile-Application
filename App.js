import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="To-Do List" 
          component={HomeScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#ffff00', // Custom header color
            },
            headerTintColor: '#000000', // Custom text color for header
            headerTitleStyle: {
              fontWeight: 'bold', // Custom font weight for header title
            },
          }}
        />
        <Stack.Screen 
          name="Add Task" 
          component={AddTaskScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#ffff00', // Custom header color
            },
            headerTintColor: '#000000', // Custom text color for header
            headerTitleStyle: {
              fontWeight: 'bold', // Custom font weight for header title
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
