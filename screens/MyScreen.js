import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MyScreen = () => {
    return (
        <View style={styles.container}>
            <Text>My Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    }
  });

export default MyScreen
