import ENV from '../env';
import * as authActions from './auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_CHAT_LIST } from '../store/actions/chat';

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

export const getMessages = async function (chatId) {

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
    // console.log(resData)
    console.log("doneapi")
    if (resData.error) {
        throw new Error(resData.error);
    }
    return resData;
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
        console.log(resData);
        const dataUserList =  resData.map( (item, key) => {
            const test = {};
            const result=[]
            try {
                 result = authActions.show(item.userId);
            }
            catch (err) {
                console.log(err);
            }
            
            // result.then(ress => {

            // test["userData"] = result;
            test["idChat"] = item.id;
            test["userId"] = item.userId;
            test["time"] = item.time;

            // })
        //    console.log(item.id)
           return test;

        })
        console.log(dataUserList)
        console.log("doneapi")
        if (resData.error) {
            throw new Error(resData.error);
        }

        // dispatch({
        //     type: SET_CHAT_LIST,
        //     chatList: dataUserList
        // });
        return dataUserList;
    }
};