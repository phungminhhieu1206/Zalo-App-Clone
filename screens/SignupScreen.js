import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import SignupForm from '../components/SignupScreen/SignupForm'
import { DismissKeyboard } from '../constants/constantFunc'

const SignupScreen = () => (
    <DismissKeyboard>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../assets/images/logo-instagram.png')}
                />
            </View>
            <SignupForm />
        </View>
    </DismissKeyboard>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 60,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 10,
    }
})

export default SignupScreen
