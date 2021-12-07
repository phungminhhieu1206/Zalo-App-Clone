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
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';


const AuthStackNavigator = createNativeStackNavigator();

export const AuthNavigator = () => {
    return (
        <AuthStackNavigator.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{ headerShown: false }}
        >
            <AuthStackNavigator.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
             <AuthStackNavigator.Screen
                name="BottomNavigator"
                component={BottomNavigator}
                options={{ headerShown: false }}
            />
             <AuthStackNavigator.Screen
                name="SignupScreen"
                component={SignupScreen}
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

const getTabOneBottomVisibility = (route) => {
    console.log("route -->", route);
    // console.log("navigation -->", navigation);
    const routeName = route.name;
    if (routeName === 'Messages') {
        return {
            display: 'flex'
        }
    } else {
        return {
            display: 'none'
        }
    }
}

// BottomTabOne - Messages
const MessageStackNavigator = createStackNavigator();

const MessageNavigator = () => {
    return (
        <MessageStackNavigator.Navigator>
            <MessageStackNavigator.Screen
                name="ChatHome"
                component={ChatHomeScreen}
                options={{
                    headerTitle: ChatHomeHeader,
                    headerLeft: null,
                }}
            />
            <MessageStackNavigator.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={{
                    headerTitle: ChatRoomHeader,
                    headerLeft: null,
                }}
            />
            <MessageStackNavigator.Screen
                name="SearchFriend"
                component={SearchFriend}
                options={{
                    headerTitle: SearchFriendHeader,
                    headerLeft: null
                }}
            />
        </MessageStackNavigator.Navigator>
    );
};


// BottomTabTwo - Contact
const ContactStackNavigator = createStackNavigator();

const ContactNavigator = () => {
    return (
        <ContactStackNavigator.Navigator>
            <ContactStackNavigator.Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    headerTitle: ContactHeader,
                    headerLeft: null
                }}
            />
            <ContactStackNavigator.Screen
                name="SearchFriend"
                component={SearchFriend}
                options={{
                    headerTitle: SearchFriendHeader,
                    headerLeft: null
                }}
            />
            <ContactStackNavigator.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={{
                    headerTitle: ChatRoomHeader,
                    headerLeft: null,
                }}
            />
        </ContactStackNavigator.Navigator>
    );
};

// BottomTabThree - TimeLine
const PostStackNavigator = createStackNavigator();

const PostNavigator = () => {
    return (
        <PostStackNavigator.Navigator>
            <PostStackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: HomeHeader,
                    headerLeft: null
                }}
            />
            <PostStackNavigator.Screen
                name="NewPost"
                component={NewPostScreen}
                options={{
                    headerTitle: NewPostHeader,
                    headerLeft: null
                }}
            />
            <PostStackNavigator.Screen
                name="Comment"
                component={CommentScreen}
                options={{
                    headerTitle: CommentHeader,
                    headerLeft: null
                }}
            />
            <PostStackNavigator.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={{
                    headerTitle: ChatRoomHeader,
                    headerLeft: null,
                }}
            />
            <PostStackNavigator.Screen
                name="SearchFriend"
                component={SearchFriend}
                options={{
                    headerTitle: SearchFriendHeader,
                    headerLeft: null
                }}
            />
        </PostStackNavigator.Navigator>
    );
};


// BottomTabFour - Me
const UserStackNavigator = createStackNavigator();

const UserNavigator = () => {
    return (
        <UserStackNavigator.Navigator>
            <UserStackNavigator.Screen
                name="My"
                component={MyScreen}
                options={{
                    headerTitle: MeHeader,
                    headerLeft: null
                }}
            />
            <UserStackNavigator.Screen
                name="MyChannel"
                component={MyChannel}
                options={{
                    headerTitle: MyChannelHeader,
                    headerLeft: null
                }}
            />
            <UserStackNavigator.Screen
                name="MyChannelSetup"
                component={MyChannelSetup}
                options={{
                    headerTitle: MyChannelSetupHeader,
                    headerLeft: null
                }}
            />
            <UserStackNavigator.Screen
                name="MyChannelSetting"
                component={MyChannelSetting}
                options={{
                    headerTitle: MyChannelSettingHeader,
                    headerLeft: null
                }}
            />
            <UserStackNavigator.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={{
                    headerTitle: ChatRoomHeader,
                    headerLeft: null,
                }}
            />
            <UserStackNavigator.Screen
                name="SearchFriend"
                component={SearchFriend}
                options={{
                    headerTitle: SearchFriendHeader,
                    headerLeft: null
                }}
            />
        </UserStackNavigator.Navigator>
    );
};


const BottomTabNavigator = createBottomTabNavigator();

export const BottomNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <BottomTabNavigator.Navigator
            // initialRouteName="ChatHome"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                headerShown: false
            }}
        >
            <BottomTabNavigator.Screen
                name="Messages"
                component={MessageNavigator}
                options={({ route }) => ({
                    tabBarIcon: ({ color }) => (
                        < MaterialCommunityIcons
                            name="chat-processing"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    ),
                    tabBarStyle: getTabOneBottomVisibility(route),
                    tabBarLabel: 'Messages',
                })}
            />
            <BottomTabNavigator.Screen
                name="Contacts"
                component={ContactNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="contact-page"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    ),

                }}
            />
            <BottomTabNavigator.Screen
                name="Timeline"
                component={PostNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="clock-time-eight"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTabNavigator.Screen
                name="Me"
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="person"
                            size={30}
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    ),
                }}
            />
        </BottomTabNavigator.Navigator>
    );
}
