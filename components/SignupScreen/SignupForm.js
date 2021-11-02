import React, { Fragment, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    Alert
} from 'react-native'
import auth from '@react-native-firebase/auth'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

import { useNavigation } from '@react-navigation/core'

const SignupForm = () => {

    const navigation = useNavigation();

    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(6, 'Your password has to have at least 8 characters'),
    })

    // const getRandomProfilePicture = async () => {
    //     const response = await fetch('https://randomuser.me/api')
    //     const data = await response.json()
    //     return data.results[0].picture.large
    // }

    const onSignup = async (email, password) => {
        try {
            const authUser = await auth().createUserWithEmailAndPassword(email, password)
            console.log('Firebase user created successfully', email, password)
            // firestore.collection('users').add({
            //     owner_uid: authUser.user.uid,
            //     username: username,
            // })
        } catch (error) {
            Alert.alert('ERROR', error.message)
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={values => {
                    onSignup(values.email, values.password)
                    // console.log(values)
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                    <Fragment>
                        <View
                            style={[
                                styles.inputFiled,
                                {
                                    borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red',
                                },
                            ]}
                        >
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View
                            style={[
                                styles.inputFiled,
                                {
                                    borderColor: values.username.length < 1 || values.username.length >= 2 ? '#ccc' : 'red',
                                },
                            ]}
                        >
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View
                            style={[
                                styles.inputFiled,
                                {
                                    borderColor: values.password.length < 1 || values.password.length >= 6 ? '#ccc' : 'red',
                                },
                            ]}
                        >
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>

                        <View style={styles.loginContainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#6BB0F5' }}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </Fragment>
                )}

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
    },
    inputFiled: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 5,
    }),
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    loginContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default SignupForm
