import ENV from '../env';
import * as authActions from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_CHAT_LIST, SET_CHATS } from '../store/actions/chat';

export const send = async function (receivedId, content, type) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    let data = {
        receivedId: receivedId,
        content: content,
        type: type
    }
    // console.log(JSON.stringify(data))
    const response = await fetch(`${ENV.apiUrl}/chats/send`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token1}`

        },
        body: JSON.stringify(data)
    });
    console.log("created")

    const resData = await response.json();
    // console.log(resData)
    console.log("doneapi")
    if (resData.error) {
        throw new Error(resData.error);
    }
    return resData;
};

export const getMessages = (chatId) => {
    return async (dispatch, getState) => {
        const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;

        // console.log(JSON.stringify(data))
        const response = await fetch(`${ENV.apiUrl}/chats/getMessages/${chatId}`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token1}`

            },
            // body: JSON.stringify(data)
        });
        console.log("created")

        const resData = await response.json();
        let data = resData.data.map((item) => {

            let test = {}

            test["id"] = item.user._id;
            test["content"] = item.content;
            test["createdAt"] = item.createdAt;
            return test;
        });

        console.log("doneapi")
        if (resData.error) {
            throw new Error(resData.error);
        }
        dispatch({
            type: SET_CHATS,
            chats: data
        });
        return  data;
    }
};

export const fetchChatList = () => {

    return async (dispatch, getState) => {

        const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;

        // console.log(token1)
        const response = await fetch(`${ENV.apiUrl}/chats/listUser`, {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token1}`

            },
            // body: JSON.stringify(data)
        });
        const res = await response.json();

        const resData = res.userIdList;


        // console.log(res)
        console.log("doneapi")
        if (res.error) {
            throw new Error(res.error);
        }

        dispatch({
            type: SET_CHAT_LIST,
            chatList: res.userIdList
        });
        return resData;
    }
};