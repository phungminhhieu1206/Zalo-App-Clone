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
    let messageContent = null;
    const id_room = route.params?.id;
    {
        if (id_room) {
            ChatData.map((item) => {
                if (item.id === id_room) {
                    messageContent = item.messages;
                }
            })
        }
    }

    const dispatch = useDispatch();
   
    const [mess, setMess] =  useState("");

    const loadMess = useCallback (async () => {
        // setError(null);
        try {
            console.log("start get");
            const res = await ChatActions.getMessages();
            setMess(res);
            console.log("res");

        } catch (err) {
            setError(err.message);
        }
    }
    , []
    )

    useEffect(() => {
        loadMess();

        // console.log(posts);
    }, [loadMess])

    return (
        <SafeAreaView style={styles.page} >
            <FlatList
                // data={messageContent}
                data={mess}
                renderItem={({ item }) => <Message messages={item} />}
                inverted
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
