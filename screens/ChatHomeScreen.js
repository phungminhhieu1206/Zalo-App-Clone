// import * as React from 'react';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import ChatRoomItem from '../components/Chat/ChatRoomItem/ChatRoomItem';
import ChatRoomData from '../assets/fake-data/ChatRooms';

import * as chatActions from '../api/chat';

export default function ChatHomeScreen() {
  const dispatch = useDispatch();
  const chatList = useSelector(state => state.chat.chatList);
  const [isLoading, setIsLoading] = useState(false);

  const loadChats = useCallback(async () => {
    try {
      console.log("startapi")

      const result = await dispatch(chatActions.fetchChatList());
      // await dispatch(chatActions.fetchChats());
      // setData(result);
  } catch (err) {
      console.log(err)
  }
  })

  useEffect(() => {
    loadChats();
  },[dispatch, loadChats])

  console.log(chatList);
  return (
    <View style={styles.home_chat}>
      {/* <FlatList
        data={chatList}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={true}
      /> */}
    </View >
  );
}

const styles = StyleSheet.create({
  home_chat: {
    backgroundColor: 'white',
    flex: 1,
  }
});
