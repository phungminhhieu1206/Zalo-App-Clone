import React from 'react'
import {
    View,
    StyleSheet,
    Image,
} from 'react-native'
import LoginForm from '../components/LoginScreen/LoginForm'
import { DismissKeyboard } from '../constants/constantFunc'

const LoginScreen = () => {
    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../assets/images/logo-instagram.png')}
                    />
                </View>
                <LoginForm />
            </View>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    }
})

export default LoginScreen
