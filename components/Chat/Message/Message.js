import * as React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import  AsyncStorage  from '@react-native-async-storage/async-storage';


export default function Message({ messages }) {

    const myID = JSON.parse(AsyncStorage.getItem('user')).user;
    console.log(myID);
    const isMe = messages.id === myID;

    return (
        <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
            <Text style={{ color: isMe ? 'black' : 'white' }}>{messages.content}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
    leftContainer: {
        backgroundColor: '#3777f0',
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: 'lightgrey',
        marginLeft: 'auto',
        marginRight: 10
    }
})