import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import {
    SimpleLineIcons,
    Feather,
    MaterialCommunityIcons,
    AntDesign,
    Ionicons
} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

const MessageInput = () => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.warn("sending: ", message);

        setMessage('');
    }

    const onPlusClicked = () => {
        console.warn("on plus clicked");

    }

    const onPressHandle = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }

    }

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={70}
        >
            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <SimpleLineIcons name="emotsmile" size={24} style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    placeholder="Message..."
                    placeholderTextColor="lightgrey"
                    value={message}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                    style={styles.inputBox}
                />
                <TouchableOpacity>
                    <Feather name="camera" size={24} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="microphone-outline" size={24} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <Pressable onPress={onPressHandle} style={styles.buttonContainer}>
                {message ? <Ionicons name="send" size={20} color='white' /> : <AntDesign name="plus" size={30} color='white' />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    icon: {
        marginHorizontal: 5,
        color: '#595959'
    },
    inputBox: {
        flex: 1,
        marginHorizontal: 5,
        // borderColor: 'black',
        // borderWidth: 1
    },
    buttonContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3777f0'
    }
})

export default MessageInput
