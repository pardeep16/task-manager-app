import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeTabNavigator from './src/screens/HomeScreen/HomeTabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
   <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{
        headerShown:false,
      }}/>
      <Stack.Screen name='Home' component={HomeTabNavigator} options={{
        headerShown:false
      }}/>
    </Stack.Navigator>
   </NavigationContainer>
    </SafeAreaView>
  )
}

export default App