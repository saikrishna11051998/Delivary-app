// import React from 'react'

// import {createBottomNavNavigator} from '@react-navigation/BottomNav'
// import {Icon} from 'react-native-element';
// import HomeScreen from '../../HomeScreen';
// import {colors} from '../style'
// const ClientTabs = createBottomNavNavigator();

// export default function  RootClientTabs(){
//      return(
//         <ClientTabs.Navigator
//             tabBarOptions =  {{
//                 activeTintColor: colors.buttons
//             }}
//             >
//             <ClientTabs.Screen 
//             name = "HomeScreen"
//             component= {HomeScreen}
//             options ={
//                 {
//                     tabBarLabel :"Home",
//                     tabBarIcon :({color,size})=>(
//                     <Icon 
//                     name ="home"
//                     type = "material"
//                     color = {color}
//                       size ={size}
//                       />
//                     )
//                 }
//             }
//             />

           
//         </ClientTabs.Navigator>
//      )
// }