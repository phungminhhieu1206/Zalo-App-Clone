import React from 'react'
import {
  View,
  Image,
  Text,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';

const ChatRoomHeader = () => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  // console.log(props);

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width,
      padding: 10,
      alignItems: 'center',
      marginLeft: -16,
      backgroundColor: '#019ff8'
    }}>
      <TouchableOpacity onPress={() => navigation.navigate("ChatHome")}>
        <Ionicons
          name="chevron-back"
          size={30}
          color="white"
          style={{
            marginRight: 15
          }}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20
        }}
      />
      <Text
        numberOfLines={1}
        style={{
          flex: 1,
          textAlign: 'left',
          fontSize: 20,
          paddingLeft: 10,
          color: 'white'
        }}>Username</Text>
      <TouchableOpacity>
        <Feather
          name="phone"
          size={24}
          color="white"
          style={{
            marginHorizontal: 10,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign
          name="videocamera"
          size={24}
          color="white"
          style={{
            marginHorizontal: 5,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather
          name="more-vertical"
          size={24}
          color="white"
          style={{
            marginHorizontal: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ChatRoomHeader
