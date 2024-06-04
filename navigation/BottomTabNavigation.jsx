import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Main, Notifications, Services, About, Calculator, Client, Login} from "../screens"


const Tab = createBottomTabNavigator()

const screenOptions={
  tabBarShowLabel : false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation:0,
    height: 70
  }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Главная" component={Main} options={{
        tabBarIcon:({focused})=>{
          return <Ionicons name={focused ? "home" : "home-outline"}  
          size={30}
          color={focused ? "#54565A" : "#F4C55C"}/>
        }
      }}/>
      <Tab.Screen name="Уведомления" component={Notifications} options={{
        tabBarIcon:({focused})=>{
          return <Ionicons name={focused ? "list" : "list-outline"}  
          size={30}
          color={focused ? "#54565A" : "#F4C55C"}/>
        }
      }}/>
      <Tab.Screen name="Услуги" component={Services} options={{
        tabBarIcon:({focused})=>{
          return <Ionicons name={focused ? "car" : "car-outline"}  
          size={30}
          color={focused ? "#54565A" : "#F4C55C"}/>
        }
      }}/>
      <Tab.Screen name="Калькулятор" component={Calculator} options={{
        tabBarIcon:({focused})=>{
          return <Ionicons name={focused ? "calculator" : "calculator-outline"}  
          size={30}
          color={focused ? "#54565A" : "#F4C55C"}/>
        }
      }}/>
      <Tab.Screen name="Клиент" component={Client} options={{
        tabBarIcon:({focused})=>{
          return <Ionicons name={focused ? "person" : "person-outline"}  
          size={30}
          color={focused ? "#54565A" : "#F4C55C"}/>
        }
      }}/>
      <Tab.Screen name="Дортехнологика" component={About} options={{
        tabBarIcon:({focused})=>{
          return <Ionicons name={focused ? "information-circle" : "information-circle-outline"}  
          size={30}
          color={focused ? "#54565A" : "#F4C55C"}/>
        }
      }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation