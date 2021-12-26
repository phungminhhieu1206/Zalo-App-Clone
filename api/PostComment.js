import ENV from '../env';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export const listComment = async function (postId) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    // const img = JSON.stringify(images);

    // let data = {
    //     subject: subject,
    //     details: details
    // }

    // console.log(JSON.stringify(data))

    const response = await fetch(`${ENV.apiUrl}/postComment/list/${postId}`, {
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

export const createComment = async function (content, postId) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    // const img = JSON.stringify(images);

    let data = {
        content: content
    }

    // console.log(JSON.stringify(data))

    const response = await fetch(`${ENV.apiUrl}/postComment/list/${postId}`, {
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