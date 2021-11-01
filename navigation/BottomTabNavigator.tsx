import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatHomeScreen from '../screens/ChatHomeScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint, headerShown: false }}>
      <BottomTab.Screen
        name="Messages"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chat-processing" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Contacts"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="contact-page" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Timeline"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="clock-time-eight" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Me"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<RootTabParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChatHomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<RootTabParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={ChatRoomScreen}
        options={{ headerTitle: 'Chat' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<RootTabParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator screenOptions={{ headerShown: false }}>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={ChatRoomScreen}
        options={{ headerTitle: 'Chat' }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<RootTabParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator screenOptions={{ headerShown: false }}>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={ChatRoomScreen}
        options={{ headerTitle: 'Chat' }}
      />
    </TabFourStack.Navigator>
  );
}