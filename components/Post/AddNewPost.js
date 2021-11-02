import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => (
    <View style={styles.container}>
        <FormikPostUploader />
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10,
    }
})

export default AddNewPost
