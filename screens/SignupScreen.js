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
                    source={require('../assets/images/zalo-logo.jpg')}
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
        paddingHorizontal: 12,
        justifyContent: 'center'
    },
    logoContainer: {
        alignItems: 'center',
    }
})

export default SignupScreen
