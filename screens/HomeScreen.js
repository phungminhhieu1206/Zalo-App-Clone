import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native'
import Stories from '../components/HomeScreen/Stories'
// import Header from '../components/home/Header'
import { POSTS } from '../assets/fake-data/Posts'
import Post from '../components/HomeScreen/Post.js'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Header /> */}
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            {/* <BottomTabs icons={bottomTabIcons} /> */}
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
