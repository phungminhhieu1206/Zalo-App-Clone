import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Contact Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
});

export default ContactScreen
