import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ScheduleTasks from '../ScheduleTasks/ScheduleTasks';

import HomeImg from '../../assets/img/home.png';
import HomeFilled from '../../assets/img/home-filled.png';
import Calendar from '../../assets/img/calendar.png';
import CalendarFilled from '../../assets/img/calendar-filled.png';

const Tab = createBottomTabNavigator();
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        
    }}>
        <Tab.Screen  name='HomeScreen' component={HomeScreen} options={{
            headerShown:false,
            tabBarIcon:({focused})=>(
              <Image source={focused? HomeFilled: HomeImg} style={{width:28,height:28,marginTop:10}}/> 
            ),
            tabBarLabel:'',
            }}/>
        <Tab.Screen name='ScheduleTask' component={ScheduleTasks} options={{headerShown:false,
        tabBarIcon:({focused})=>(
              <Image source={focused? CalendarFilled: Calendar} style={{width:28,height:28,marginTop:10}}/> 
            ),
            tabBarLabel:'',}}/>
    </Tab.Navigator>
  )
}

export default HomeTabNavigator