import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from '../../HomeScreen';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();
const AppStack = () => {
  return (
   <Drawer.Navigator screenOptions={{headerShown: false}}>
     <Drawer.Navigator name='Home' component={HomeScreen}/>
   </Drawer.Navigator>
  )
}

export default AppStack