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
      <TouchableOpacity onPress={() => navigation.navigate("ChatHome")}>
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
          textAlign: 'left',
          fontSize: 20,
          paddingLeft: 10,
          color: 'white',
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
            marginHorizontal: 15,
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
