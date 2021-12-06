import  AsyncStorage  from '@react-native-async-storage/async-storage';
import ENV from '../../env';
import { useDispatch } from 'react-redux';
import React from 'react';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AUTO_LOGIN  = 'SET_DID_TRY_AUTO_LOGIN';



export const setDidTryAutoLogin = () => {
    return{
        type: SET_DID_TRY_AUTO_LOGIN
    };
};

export const authenticate = (user, token) => ({
    type: AUTHENTICATE,
    user,
    token
});

// Đăng ký

// export const signup = async function (phonenumber, password, username) {

//         const response = await fetch(`${ENV.apiUrl}/users/register`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 phonenumber: phonenumber,
//                 password: password,
//                 username: username,

//             })
//         });
//         console.log("suss");
        
//         const resData = await response.json();
//         console.log(resData);

//         if(resData.error){
//             throw new Error(resData.error);
//         }

//         // return resData.data;
//         return resData.data;
// };


// Đăng nhập

// export const signin = async function (phonenumber, password) {
       
    
//         const response = await fetch(`${ENV.apiUrl}/users/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 phonenumber: phonenumber,
//                 password: password
//             })
//         });
//         console.log("test");
//         const resData = await response.json();
//         console.log(resData);

//         if(resData.error){
//             throw new Error(resData.error);
//         }
//         console.log(resData.data.username);
//         console.log(resData.token);
        
       
//         console.log(resData.token)
//         saveDataToStorage(resData.token);

//         return resData;
// };




// export const logout = () => {
//     AsyncStorage.removeItem('userData');
//     return {
//         type: LOGOUT
//     };
// }


// const saveDataToStorage = (token) => {
//     AsyncStorage.setItem('token', JSON.stringify({
//         token,
//     }));
// }