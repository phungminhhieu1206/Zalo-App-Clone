// import * as React from 'react';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    StyleSheet,
    SafeAreaView,
    FlatList
} from 'react-native';
import ChatData from '../assets/fake-data/Chats';
import Message from '../components/Chat/Message/Message';
import MessageInput from '../components/Chat/Message/MessageInput';
import { useRoute } from '@react-navigation/core';
import * as ChatActions from '../api/chat';


export default function ChatRoomScreen() {

    const route = useRoute();

    const id_room = route.params?.id;

    const dispatch = useDispatch();
    const allChats = useSelector(state => state.chat.allChats);

    const [mess, setMess] =  useState(allChats);
   
    const loadMess = useCallback (async () => {
       
        try {
            console.log("start get");
            const res = await dispatch(ChatActions.getMessages(id_room));
            setMess(res);

        } catch (err) {
            setError(err.message);
        }
    }
    , [dispatch])

    useEffect(() => {
        loadMess();
        
    }, [loadMess, dispatch])
    
    console.log(mess);
   

    return (
        <SafeAreaView style={styles.page} >
               
                <FlatList
                    data={mess}
                    renderItem={({item}) => <Message messages={item} />}
                    showsVerticalScrollIndicator={true}
                />
            <MessageInput />
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
});
