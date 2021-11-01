import * as React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    FlatList
} from 'react-native';
import ChatData from '../assets/fake-data/Chats';
import Message from '../components/Chat/Message/Message';
import MessageInput from '../components/Chat/Message/MessageInput';

export default function ChatRoomScreen() {
    return (
        <SafeAreaView style={styles.page} >
            <FlatList
                data={ChatData.messages}
                renderItem={({ item }) => <Message messages={item} />}
                inverted
            />
            <MessageInput/>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
});
