import { View, Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import Register from './Register';
import Login from './Login';
import Signup from './Signup';

export default function Loginstack() {
    const Stack = createNativeStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Register"
        screenOptions={{ headerShown: false, animationEnabled: false}}>
       <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
  )
}

