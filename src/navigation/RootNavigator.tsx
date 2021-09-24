import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
//Screens
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import UserDetail from '../screens/UserDetail';

const Stack = createNativeStackNavigator();


const RootNavigator: React.FC = () => {


    const Dashboard = () => {

        return (
            <DrawerNavigator />
        )
    }


    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} >
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='UserDetail' component={UserDetail} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default RootNavigator;