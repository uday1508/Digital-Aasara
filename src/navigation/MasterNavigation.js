import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import Loginstack from '../screens/Login/Loginstack';
import HomeStack from '../screens/home/HomeStack';

const MasterNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Loginstack" component={Loginstack} />
                        <Stack.Screen name ="HomeStack" component={HomeStack}/>
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MasterNavigation