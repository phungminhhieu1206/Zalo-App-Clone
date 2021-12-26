import React, { useCallback, useEffect, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import * as postsActions from '../api/posts';

import Stories from '../components/HomeScreen/Stories'
import { POSTS } from '../assets/fake-data/Posts'
import Post from '../components/HomeScreen/Post.js'
import NewPost from '../components/HomeScreen/NewPost'
import { View } from '../components/Themed';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState();
    const posts = useSelector(state => state.posts.allPosts);

    const loadPosts = useCallback (async () => {
        // setError(null);
        try {
            console.log("start get");
            await dispatch(postsActions.fetchPosts());
            console.log("res");

        } catch (err) {
            setError(err.message);
        }
    }
    , [dispatch, setError]
    )

    useEffect(() => {

        // const loadPosts = async () => {
        //     try {

        //         console.log("start get");
        //         await dispatch(postsActions.fetchPosts());
        //         console.log("res");
        //     } catch (err) {
        //         console.log(err);;
        //     }
        // }
        loadPosts();

      
    }, [dispatch, loadPosts])
    // console.log(posts[1].author.username);
      console.log(posts);
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <Stories />
                <NewPost />
                {posts.map((post, index) => (
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
