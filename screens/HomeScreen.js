import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
} from 'react-native'
import Stories from '../components/HomeScreen/Stories'
import { POSTS } from '../assets/fake-data/Posts'
import Post from '../components/HomeScreen/Post.js'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <Stories />
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // borderColor: 'white',
        // borderWidth: 1,
        flex: 1,
    }
})

export default HomeScreen
