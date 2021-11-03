import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, View, Image, Text, useWindowDimensions, Pressable, Button, TouchableOpacity, TextInput } from 'react-native';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatHomeScreen from '../screens/ChatHomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import BottomTabNavigator from './BottomTabNavigator';
import NewPostScreen from '../components/Post/NewPostScreen';
import NewPostHeader from './HeaderNavigator/NewPostHeader';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SearchFriend from '../components/Friend/SearchFriend';
import { useNavigation, } from '@react-navigation/core';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchFriendHeader from './HeaderNavigator/SearchFriendHeader';
import ChatRoomHeader from './HeaderNavigator/ChatRoomHeader';
import MyChannel from '../components/MyChannel/MyChannel';
import MyChannelHeader from './HeaderNavigator/MyChannelHeader';
import MyChannelSetup from '../components/MyChannel/MyChannelSetup';
import MyChannelSetupHeader from './HeaderNavigator/MyChannelSetupHeader';
import MyChannelSetting from '../components/MyChannel/MyChannelSetting';
import MyChannelSettingHeader from './HeaderNavigator/MyChannelSettingHeader';

export const SignedInStack = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="ChatHome"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          headerTitle: NewPostHeader,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="SearchFriend"
        component={SearchFriend}
        options={{
          headerTitle: SearchFriendHeader,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="MyChannel"
        component={MyChannel}
        options={{
          headerTitle: MyChannelHeader,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="MyChannelSetup"
        component={MyChannelSetup}
        options={{
          headerTitle: MyChannelSetupHeader,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="MyChannelSetting"
        component={MyChannelSetting}
        options={{
          headerTitle: MyChannelSettingHeader,
          headerBackVisible: false,
        }}
      />

    </Stack.Navigator>
  );
}

export const SignedOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

