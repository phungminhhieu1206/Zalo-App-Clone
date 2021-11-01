import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import ChatRoomItem from '../components/Chat/ChatRoomItem/ChatRoomItem';
import ChatRoomData from '../assets/fake-data/ChatRooms';

export default function ChatHomeScreen() {
  return (
    <View style={styles.home_chat}>
      <FlatList
        data={ChatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={true}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  home_chat: {
    backgroundColor: 'white',
    flex: 1,
  }
});
