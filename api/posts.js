import ENV from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const createPost = async function (described, images) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    const img = JSON.stringify(images);

    let data = {
        described: described,
        images: [images]
    }

    console.log(JSON.stringify(data))
    // let img =[];
    // img.push(images);
    // console.log(img[0])

    // console.log(`Bearer ${token1}`)
    // const userId = getState().auth.user._id;
    // const postData = {described}
    console.log(described)

    const response = await fetch(`${ENV.apiUrl}/posts/create`, {
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

export const editPost = async function (described, images, id) {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    const img = JSON.stringify(images);

    let data = {
        described: described,
        images: [images]
    }

    console.log(JSON.stringify(data))
    // const userId = getState().auth.user._id;

    console.log(described)

    const response = await fetch(`${ENV.apiUrl}/posts/edit/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token1}`

        },
        body: JSON.stringify(data)
    });
    console.log("created")
    const resData = await response.json();
    console.log("doneapi")
    if (resData.error) {
        throw new Error(resData.error);
    }

    return resData;

};

export const fetchPosts = async (userId) => {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    console.log(token1);
    console.log(userId);
    const response = await fetch(`${ENV.apiUrl}/posts/list/`, 
    {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token1}`

        },
        params: {
            userId: '617e3463fe0ef04664383a6f'
        }
    });
    console.log("getdone")
    const resData = await response.json();
    console.log(resData);
    if(resData.error){
        throw new Error(resData.error);
    }
    return resData;

};

export const showPosts = async (id) => {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    console.log(token1);
    const response = await fetch(`${ENV.apiUrl}/posts/show/${id}`, 
    {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token1}`

        }
    });
    console.log("getdone")
    const resData = await response.json();
    console.log(resData);
    if(resData.error){
        throw new Error(resData.error);
    }
    return resData;

};

export const deletePosts = async (id) => {

    const token1 = JSON.parse(await AsyncStorage.getItem('token')).token;
    console.log(token1);
    const response = await fetch(`${ENV.apiUrl}/posts/delete/${id}`, 
    {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token1}`

        }
    });
    console.log("getdone")
    const resData = await response.json();
    console.log(resData);
    if(resData.error){
        throw new Error(resData.error);
    }
    return resData;

}