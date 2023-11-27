import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Choice from './Choice';
import UpdateOrg from '../organizatin/UpdateOrg';
import CreateOrg from '../organizatin/CreateOrg';
import Donor from '../donor/Donor';
import Volunteer from '../donor/Volunteer';


const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Choice"  screenOptions={{ headerShown: false, animationEnabled: false}}>
                <Stack.Screen name="Choice" component={Choice} />
                <Stack.Screen name="UpdateOrg" component={UpdateOrg} />
                <Stack.Screen name="CreateOrg" component={CreateOrg} />
                <Stack.Screen name="Donor" component={Donor} />
                <Stack.Screen name="Volunteer" component={Volunteer} />
        </Stack.Navigator>
    )
}

export default HomeStack