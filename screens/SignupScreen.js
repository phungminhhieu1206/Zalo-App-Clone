import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import SignupForm from '../components/signupScreen/SignupForm'
import { DismissKeyboard } from '../constant/constantFunc'

const SignupScreen = ({ navigation }) => (
    <DismissKeyboard>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../assets/logo-instagram.png')}
                />
            </View>
            <SignupForm navigation={navigation} />
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
