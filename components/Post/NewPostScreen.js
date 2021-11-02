import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import AddNewPost from './AddNewPost'

const NewPostScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <AddNewPost />
        </SafeAreaView>
    )
}

export default NewPostScreen
