import React,{useEffect} from 'react';

import {Text, View} from 'react-native';
import Homescreen from './src/screen/Homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detailsscreen from './src/screen/Detailsscreen';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const App = () => {
return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Homescreen" component={Homescreen}  />
    <Stack.Screen name="Detailsscreen" component={Detailsscreen} />
  </Stack.Navigator>
  </NavigationContainer>
)
};

export default App;
