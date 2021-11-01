import * as React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    FlatList
} from 'react-native';
import ChatData from '../assets/fake-data/Chats';
import Message from '../components/Chat/Message/Message';
import MessageInput from '../components/Chat/Message/MessageInput';
import { useRoute } from '@react-navigation/core'

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

    return (
        <SafeAreaView style={styles.page} >
            <FlatList
                data={messageContent}
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
