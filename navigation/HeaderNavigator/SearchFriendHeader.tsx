import React from 'react'
import {
    View,
    Image,
    Text,
    useWindowDimensions,
    Pressable,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';

const SearchFriendHeader = () => {
    const { width } = useWindowDimensions();

    const navigation = useNavigation();

    // console.log(props);

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width,
            paddingVertical: 11,
            paddingLeft: 5,
            alignItems: 'center',
            marginLeft: -16,
            backgroundColor: '#019ff8',
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                    name="chevron-back-sharp"
                    size={30}
                    color="white"
                    style={{
                        marginRight: 10,
                        fontWeight: '200'
                    }}
                />
            </TouchableOpacity>
            <TextInput
                placeholder="Search friends, messages..."
                placeholderTextColor="grey"
                autoFocus={true}
                onChangeText={(newMessage) => console.warn("enter: ", newMessage)}
                style={{
                    flex: 1,
                    height: '100%',
                    marginRight: 10,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    fontSize: 14,
                    paddingHorizontal: 10
                }}
            />
            <TouchableOpacity onPress={() => console.warn('clicked qrcode of search friend screen')}>
                <MaterialCommunityIcons
                    name="qrcode-scan"
                    size={22}
                    color="white"
                    style={{
                        marginHorizontal: 15
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchFriendHeader
