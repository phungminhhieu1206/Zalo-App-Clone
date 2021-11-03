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

const MyChannelHeader = () => {
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
        <Image
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            marginLeft: 15
          }}
        />
        <Text
          numberOfLines={1}
          style={{
            flex: 1,
            textAlign: 'left',
            fontSize: 18,
            paddingLeft: 10,
            color: 'white',
          }}>Phung Minh Hieu</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="clock-check-outline"
            size={24}
            color="white"
            style={{
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyChannelSetup")}
        >
          <Feather
            name="more-horizontal"
            size={24}
            color="white"
            style={{
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

export default MyChannelHeader
