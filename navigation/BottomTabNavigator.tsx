import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { AntDesign, EvilIcons, Feather, FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatHomeScreen from '../screens/ChatHomeScreen';
import HomeScreen from '../screens/HomeScreen';
import MyScreen from '../screens/MyScreen';
import ContactScreen from '../screens/ContactScreen';
import HomeHeader from './HeaderNavigator/HomeHeader';
import ContactHeader from './HeaderNavigator/ContactHeader';
import MeHeader from './HeaderNavigator/MeHeader';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import ChatHomeHeader from './HeaderNavigator/ChatHomeHeader';

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
    <TabOneStack.Navigator screenOptions={{ headerShown: true }}>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChatHomeScreen}
        options={{ headerTitle: ChatHomeHeader }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<RootTabParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator screenOptions={{ headerShown: true }}>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={ContactScreen}
        options={{ headerTitle: ContactHeader }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<RootTabParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator screenOptions={{ headerShown: true }}>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<RootTabParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator screenOptions={{ headerShown: true }}>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={MyScreen}
        options={{ headerTitle: MeHeader }}
      />
    </TabFourStack.Navigator>
  );
}


