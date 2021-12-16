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

export const logout = () => {
    AsyncStorage.removeItem('token');
    return {
        type: LOGOUT
    };
}