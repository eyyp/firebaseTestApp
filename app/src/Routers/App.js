import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screens/Authentication/Login';
import SignUp from '../Screens/Authentication/SignUp';
import Home from '../Screens/Home/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator 
       initialRouteName="Home"
       screenOptions={{ headerShown: false }}
       >
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="Home" component={Home} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;