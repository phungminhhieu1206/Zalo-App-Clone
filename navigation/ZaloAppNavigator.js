import React from 'react'
import { Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import ChatHomeScreen from '../screens/ChatHomeScreen';
import ChatHomeHeader from './HeaderNavigator/ChatHomeHeader';
import ContactScreen from '../screens/ContactScreen';
import ContactHeader from './HeaderNavigator/ContactHeader';
import HomeScreen from '../screens/HomeScreen';
import HomeHeader from './HeaderNavigator/HomeHeader';
import MyScreen from '../screens/MyScreen';
import MeHeader from './HeaderNavigator/MeHeader';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatRoomHeader from './HeaderNavigator/ChatRoomHeader';
import SearchFriend from '../components/Friend/SearchFriend';
import SearchFriendHeader from './HeaderNavigator/SearchFriendHeader';
import MyChannel from '../components/MyChannel/MyChannel';
import MyChannelHeader from './HeaderNavigator/MyChannelHeader';
import MyChannelSetup from '../components/MyChannel/MyChannelSetup';
import MyChannelSetupHeader from './HeaderNavigator/MyChannelSetupHeader';
import MyChannelSetting from '../components/MyChannel/MyChannelSetting';
import MyChannelSettingHeader from './HeaderNavigator/MyChannelSettingHeader';
import NewPostScreen from '../components/Post/NewPostScreen';
import NewPostHeader from './HeaderNavigator/NewPostHeader';
import CommentScreen from '../components/Post/CommentScreen';
import CommentHeader from './HeaderNavigator/CommentHeader';


// AuthNavigator
const AuthStackNavigator = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator
            // initialRouteName='LoginScreen'
            screenOptions={{ headerShown: false }}
        >
            <AuthStackNavigator.Screen
                name="Auth"
                component={AuthScreen}
                options={{ headerShown: false }}
            />
            {/* <AuthStackNavigator.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={forgotPasswordScreenOptions}
            /> */}
        </AuthStackNavigator.Navigator>
    )
}

const TabOneStack = createStackNavigator();

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

const TabTwoStack = createStackNavigator();

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

const TabThreeStack = createStackNavigator();

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

const TabFourStack = createStackNavigator();

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

// BOTTOM TAB
const BottomTabNavigator = createBottomTabNavigator();

const BottomNavigator = () => {

    return (
        <BottomTabNavigator.Navigator
            // initialRouteName="ChatHome"
            screenOptions={{
                headerShown: false
            }}
        >
            <BottomTabNavigator.Screen
                name="Messages"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        < MaterialCommunityIcons
                            name="chat-processing"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name="Contacts"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="contact-page"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name="Timeline"
                component={TabThreeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="clock-time-eight"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name="Me"
                component={TabFourNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="person"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    )
                }}
            />
        </BottomTabNavigator.Navigator>
    );
}

// ZaloAppNavigator
const ZaloStackNavigator = createStackNavigator();

export const ZaloAppNavigator = () => {
    return (
        <ZaloStackNavigator.Navigator initialRouteName='ChatHome'>
            <ZaloStackNavigator.Screen
                name="ChatHome"
                component={BottomNavigator}
                options={{
                    headerLeft: null,
                    headerShown: false
                }}
            />
            <ZaloStackNavigator.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={{
                    headerTitle: ChatRoomHeader,
                    headerLeft: null,
                }}
            />
            <ZaloStackNavigator.Screen
                name="SearchFriend"
                component={SearchFriend}
                options={{
                    headerTitle: SearchFriendHeader,
                    headerLeft: null
                }}
            />
            <ZaloStackNavigator.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    headerTitle: ContactHeader,
                    headerLeft: null
                }}
            />
            <ZaloStackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: HomeHeader,
                    headerLeft: null
                }}
            />
            <ZaloStackNavigator.Screen
                name="NewPost"
                component={NewPostScreen}
                options={{
                    headerTitle: NewPostHeader,
                    headerLeft: null
                }}
            />
            <ZaloStackNavigator.Screen
                name="Comment"
                component={CommentScreen}
                options={{
                    headerTitle: CommentHeader,
                    headerLeft: null
                }}
            />
            <ZaloStackNavigator.Screen
                name="My"
                component={MyScreen}
                options={{
                    headerTitle: MeHeader,
                    headerLeft: null
                }}
            />
            <ZaloStackNavigator.Screen
                name="MyChannel"
                component={MyChannel}
                options={{
                    headerTitle: MyChannelHeader,
                    headerLeft: null
                }}
            />
            <ZaloStackNavigator.Screen
                name="MyChannelSetup"
                component={MyChannelSetup}
                options={{
                    headerTitle: MyChannelSetupHeader,
                    headerLeft: null
                }}
            />
            <ZaloStackNavigator.Screen
                name="MyChannelSetting"
                component={MyChannelSetting}
                options={{
                    headerTitle: MyChannelSettingHeader,
                    headerLeft: null
                }}
            />
        </ZaloStackNavigator.Navigator>
    );
};