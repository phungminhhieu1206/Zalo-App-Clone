import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, View, Image, Text, useWindowDimensions, Pressable } from 'react-native';
import { Feather, AntDesign, Entypo, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatHomeScreen from '../screens/ChatHomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import BottomTabNavigator from './BottomTabNavigator';
import ChatHomeHeader from './HeaderNavigator/ChatHomeHeader';
import ChatRoomHeader from './HeaderNavigator/ChatRoomHeader';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
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
        options={{ headerTitle: ChatHomeHeader, }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader
        }}
      />
    </Stack.Navigator>
  );
}
