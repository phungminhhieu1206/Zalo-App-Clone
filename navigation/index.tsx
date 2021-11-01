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
        options={{ headerTitle: HomeHeader, }}
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

const HomeHeader = (props) => {

  const { width } = useWindowDimensions();

  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width,
      padding: 10,
      alignItems: 'center',
      marginLeft: -12
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20
        }}
      />
      <Text style={{
        flex: 1,
        textAlign: 'center',
        marginLeft: 25,
        fontWeight: 'bold',
        fontSize: 20
      }}>Signal</Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{
          marginHorizontal: 10
        }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{
          marginHorizontal: 10,
          marginRight: 20
        }}
      />
    </View>
  )
}

const ChatRoomHeader = (props) => {

  const { width } = useWindowDimensions();

  // console.log(props);

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width,
      padding: 10,
      alignItems: 'center',
      marginLeft: -30,
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20
        }}
      />
      <Text style={{
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10
      }}>{props.children}</Text>
      <Feather
        name="phone"
        size={24}
        color="black"
        style={{
          marginHorizontal: 10,
        }}
      />
      <AntDesign
        name="videocamera"
        size={24}
        color="black"
        style={{
          marginHorizontal: 5,
        }}
      />
      <Feather
        name="more-vertical"
        size={24}
        color="black"
        style={{
          marginHorizontal: 5,
          marginRight: 35
        }}
      />
    </View>
  )
}