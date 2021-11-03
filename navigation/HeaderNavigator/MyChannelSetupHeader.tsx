import React from 'react'
import {
    View,
    Image,
    Text,
    useWindowDimensions,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { Feather, AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';

const MyChannelSetupHeader = () => {
    const { width } = useWindowDimensions();

    const navigation = useNavigation();

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
                    name="chevron-back"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>
            <Text
                numberOfLines={1}
                style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 18,
                    paddingLeft: 10,
                    color: 'white',
                    marginRight: 35,
                }}>Phung Minh Hieu</Text>
        </View>
    )
}

export default MyChannelSetupHeader
