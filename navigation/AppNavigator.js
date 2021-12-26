import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator, BottomNavigator } from './ZaloAppNavigator';
// import LinkingConfiguration from './LinkingConfiguration';

// import StartupScreen from '../screens/StartupScreen';

const AppNavigator = (props) => {
    /**
     * Vì sao không return state.auth.token mà lại return !!state.auth.token ?
     */
    const isAuth = useSelector((state) => !!state.auth.token);
    const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);
    // console.log("isAuth:", isAuth, ", didTryAutoLogin: ", didTryAutoLogin);


    return (
        <NavigationContainer>
            {/* Nếu đã đăng nhập thành công hiện giao diện sau đăng nhập */}
            {/* {isAuth && <BottomNavigator />} */}
            {true && <BottomNavigator />}

            {/* Chưa đăng nhập và đã thử tự động đăng nhập xem được không thì hiện màn hình login */}
            {/* { !isAuth && !didTryAutoLogin && <AuthNavigator />} */}

            {/* Chưa đăng nhập và chưa thử đăng nhập thì hiện màn hình loading */}
            {/* { !isAuth && !didTryAutoLogin && <StartupScreen />} */}
        </NavigationContainer>
    );
}

export default AppNavigator;