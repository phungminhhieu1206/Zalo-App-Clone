import ENV from '../env';

export const setRequest = async function (user_id) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    // const img = JSON.stringify(images);

    let data = {
        user_id: user_id
    }

    // console.log(JSON.stringify(data))

    const response = await fetch(`${ENV.apiUrl}/friends/set-request-friend`, {
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
export const getRequest = async function (user_id) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    // const img = JSON.stringify(images);

    let data = {
        user_id: user_id
    }

    // console.log(JSON.stringify(data))

    const response = await fetch(`${ENV.apiUrl}/friends/get-requested-friend`, {
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
export const setAccept = async function (user_id, is_accept) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    // const img = JSON.stringify(images);

    let data = {
        user_id: user_id,
        is_accept: is_accept
    }

    // console.log(JSON.stringify(data))

    const response = await fetch(`${ENV.apiUrl}/friends/set-accept`, {
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
export const setRemoveFriend = async function (user_id) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    // const img = JSON.stringify(images);

    let data = {
        user_id: user_id
    }

    const response = await fetch(`${ENV.apiUrl}/friends/set-remove`, {
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
export const listFriends = async function () {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    // const img = JSON.stringify(images);

    // let data = {
    //     user_id: user_id,
    //     is_accept: is_accept
    // }

    // console.log(JSON.stringify(data))

    const response = await fetch(`${ENV.apiUrl}/friends/list`, {
        method: 'POST',
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


