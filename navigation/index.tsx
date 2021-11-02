import { 
  NavigationContainer, 
  DefaultTheme, 
  DarkTheme,
  useNavigation
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, View, Image, Text, useWindowDimensions, Pressable } from 'react-native';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatHomeScreen from '../screens/ChatHomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import BottomTabNavigator from './BottomTabNavigator';
import ChatHomeHeader from './HeaderNavigator/ChatHomeHeader';
import ChatRoomHeader from './HeaderNavigator/ChatRoomHeader';
import HomeScreen from '../screens/HomeScreen';
import NewPostScreen from '../components/Post/NewPostScreen';
import NewPostHeader from './HeaderNavigator/NewPostHeader';

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
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerTitle: ChatRoomHeader
        }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          headerTitle: NewPostHeader
        }}
      />
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: ChatHomeHeader,
        }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPostScreen}
        options={{
          headerTitle: ChatRoomHeader
        }}
      />
    </Stack.Navigator>
  );
}
