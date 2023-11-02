import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import MainNav from './main';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen name="detail-screen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
