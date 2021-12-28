import * as React from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core'
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChatRoomItem({ chatRoom }) {

    // const user = chatRoom.users[1];

    const navigation = useNavigation();

    const onPressHandle = () => {
        // console.warn('pressed on: ', user.name);
        
        navigation.navigate('ChatRoom', { id: chatRoom.id });
        // console.warn(chatRoom.id);
    }

    const time = moment(chatRoom.time).from(moment());
    const avata = 'https://reactnative.dev/img/tiny_logo.png';
    return (
        <Pressable onPress={onPressHandle} style={styles.container}>
            <View style={styles.avatar}>
                <Image
                    source={{ uri: avata }}
                    style={styles.image}
                />
                {/* {chatRoom.newMessages ? <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
                </View> : null} */}
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>{chatRoom.username}</Text>
                    <Text numberOfLines={1} style={styles.time}>{time}</Text>
                </View>
                <Text numberOfLines={1} style={[styles.message, { color: chatRoom.newMessages ? '#3777f0' : 'gray' }]}>{chatRoom.lastcontent}</Text>
            </View>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
    },
    avatar: {
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    badgeContainer: {
        backgroundColor: '#3777f0',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 45
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    name: {
        flex: 2,
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
    },
    time: {
        flex: 1,
        textAlign: 'right',
        color: 'grey',
        justifyContent: 'center',
    },
    message: {
    }
});
