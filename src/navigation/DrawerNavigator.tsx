import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Users from '../screens/Users';
import { DrawerContent } from '@components';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import * as Colors from '../theme/Colors';
const Drawer = createDrawerNavigator();




const DrawerNavigator = () => {

  const options =
  {
    headerShown: false,
    drawerStyle: { backgroundColor: Colors.primary },
    drawerLabelStyle: { color: 'white' },
    drawerActiveTintColor: 'white'

  }


  return (
    <Drawer.Navigator screenOptions={options} >
      <Drawer.Screen name="Home" options={{drawerLabel:'Inicio'}} component={Home} />
      <Drawer.Screen name="Users" options={{drawerLabel:'Usuario'}} component={Users} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;