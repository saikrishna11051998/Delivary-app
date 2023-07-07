import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/HomeScreen';
import Userprofile from './src/screens/Userprofile';
import Productpage from './src/screens/Productpage';
import UserCart from './src/screens/UserCart';
import Placeorder from './src/screens/Placeorder';
import TrackOrder from './src/screens/TrackOrder';
import 'react-native-gesture-handler';
import RestaurantMapScreen from './src/screens/RestaurantMapScreen';
//  import DrawerNavigator from './src/globals/navigations/DrawerNavigator';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   
 <NavigationContainer>

<Stack.Navigator initialRouteName='welcomepage'>
       <Stack.Screen name="welcomepage" component={WelcomeScreen} 
       options={{
        headerShown: false,
       }}
       />
       <Stack.Screen name="signup" component={SignupScreen} 
       options ={{
        headerShown: false,
       }}
       
       />
       <Stack.Screen name="login" component={LoginScreen} 
        options ={{
            headerShown: false,
           }}
       
       />

       <Stack.Screen name = "home" component={HomeScreen}
       options={{
        headerShown : false,
       }}
       />
       <Stack.Screen name="userprofile" component={Userprofile}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen name="productpage" component={Productpage}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen name="cart" component={UserCart}
          options={{
            headerShown: false,
          }}
        />

<Stack.Screen name="placeorder" component={Placeorder}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="trackorders" component={TrackOrder}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
        name="RestaurantMapScreen" 
        component={RestaurantMapScreen}
          options={{
            headerShown: false,
          }}
        />

{/* <Stack.Screen 
        name="DrawerNavigator" 
        component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        /> */}

{/* <Drawer.Navigator initialRouteName= "Home">
       <Drawer.Screen name="Home" component={HomeScreen} />
       <Drawer.Screen name="Order" component={Placeorder} />
   </Drawer.Navigator> */}
     </Stack.Navigator>


 </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// 

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//    
//   );
// }
