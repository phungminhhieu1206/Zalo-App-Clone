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
// import auth from '@react-native-firebase/auth'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

import * as authActions from '../../api/auth'

import { useNavigation } from '@react-navigation/core'

const SignupForm = () => {

    const navigation = useNavigation();
    const [phonenumber, setPhoneNumber] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const SignupFormSchema = Yup.object().shape({
        phonenumber: Yup.string().required().min(8, 'An phonenumber is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(6, 'Your password has to have at least 8 characters'),
    })

    const inputChangeHandler = (text,inputField) => {
        if(inputField === 1){
            setPhoneNumber(text)
        } else if(inputField === 2){
            setUserName(text)
        } else if(inputField === 3){
            setPassword(text)
        }
    }
    const handleSubmit = async () => {
        try {
            const mgs = await (authActions.signup(phonenumber, username, password));
            console.log("signup succ")
            navigation.goBack();
            
        } catch (error) {
            console.log(error.message);
        }
    }

    const onSignup = (email, password) => {
        try {
            // const authUser = await auth().createUserWithEmailAndPassword(email, password)
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
                initialValues={{ phonenumber: '', username: '', password: '' }}
                // onSubmit={values => {
                //     onSignup(values.email, values.password)
                //     // console.log(values)
                // }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleBlur, handleChange, values, errors, isValid }) => (
                    <Fragment>
                        <View
                            style={[
                                styles.inputFiled,
                                {
                                    borderColor: values.phonenumber.length < 1 || Validator.validate(values.phonenumber) ? '#ccc' : 'red',
                                },
                            ]}
                        >
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Phonenumber'
                                autoCapitalize='none'
                                keyboardType='phonenumber'
                                textContentType='phonenumber'
                                autoFocus={true}
                                onChangeText={(text) => inputChangeHandler(text,1)}
                                onBlur={handleBlur('phonenumber')}
                                value={phonenumber}
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
                                onChangeText={(text) => inputChangeHandler(text,2)}
                                onBlur={handleBlur('username')}
                                value={username}
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
                                onChangeText={(text) => inputChangeHandler(text,3)}
                                onBlur={handleBlur('password')}
                                value={password}
                            />
                        </View>
                        <Pressable
                            titleSize={20}
                            style={styles.button(true)}
                            onPress={handleSubmit}
                            // disabled={!isValid}
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
