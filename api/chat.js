import ENV from '../env';

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