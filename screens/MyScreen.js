import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const MyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: 'white',
      flexDirection: 'row',
      paddingRight: 25,
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyChannel")}
        style={{
          flexDirection: 'row',
          flex: 1,
          paddingVertical: 15,
          paddingLeft: 15
        }}
      >
        <Image
          source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20
          }}
        />
        <View style={{
          marginLeft: 20,
        }}>
          <Text style={{ fontSize: 16, color: 'black', }}>Phung Minh Hieu</Text>
          <Text style={{ fontSize: 14, color: 'grey' }}>View my profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="account-convert-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
});

export default MyScreen
