import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../assets/fake-data/User_fake'

const Stories = () => {
    return (
        <View style={[styles.container, { marginBottom: 13 }]}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        < Image
                            source={{ uri: story.image }}
                            style={styles.story}
                        />
                        <Text style={{ color: 'black' }}>{
                            story.user.length > 10 ? story.user.slice(0, 9).toLowerCase() + '...' : story.user.toLowerCase()
                        }</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
    }
})

export default Stories
