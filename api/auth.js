import  AsyncStorage  from '@react-native-async-storage/async-storage';
import ENV from '../env';
import { useDispatch } from 'react-redux';
import React from 'react';


export const signin = async function (phonenumber, password) {
       
    
    const response = await fetch(`${ENV.apiUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phonenumber: phonenumber,
            password: password
        })
    });
    console.log("startapi");
    const resData = await response.json();
    console.log(resData);

    if(resData.error){
        throw new Error(resData.error);
    }
    console.log(resData.data.username);
    console.log(resData.token);
    
   
    // console.log(resData.token);
    // saveDataToStorage(resData.token);
    console.log("done api")
    return resData;
};
export const signup = async function (phonenumber, password, username) {

    const response = await fetch(`${ENV.apiUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phonenumber: phonenumber,
            password: password,
            username: username,

        })
    });
    console.log("suss");
    
    const resData = await response.json();
    console.log(resData);

    if(resData.error){
        throw new Error(resData.error);
    }

    // return resData.data;
    return resData.data;
};

export const edit = async function (avatar, cover_image) {

    const response = await fetch(`${ENV.apiUrl}/users/edit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: avatar,
            cover_image: cover_image
        })
    });
    console.log("suss");
    
    const resData = await response.json();
    console.log(resData);

    if(resData.error){
        throw new Error(resData.error);
    }

    return resData.data;
};

export const show = async function (id) {

    const response = await fetch(`${ENV.apiUrl}/users/show/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            id: id
        }
    });
    console.log("suss");
    
    const resData = await response.json();
    console.log(resData);

    if(resData.error){
        throw new Error(resData.error);
    }

    return resData.data;
};

const saveDataToStorage = (token) => {
    AsyncStorage.setItem('token', JSON.stringify({
        token,
    }));
}