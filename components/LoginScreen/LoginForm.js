import React, { Fragment, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    Alert,
} from 'react-native'
// import auth from '@react-native-firebase/auth'

import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { useNavigation } from '@react-navigation/core'

import * as authActions from '../../api/auth'
import { useDispatch } from 'react-redux'
import { authenticate } from '../../store/actions/auth'

const LoginForm = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [phonenumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const LoginFormSchema = Yup.object().shape({
        phonenumber: Yup.string().required().min(8, 'An phonenumber is required'),
        password: Yup.string().required().min(6, 'Your password has to have at least 8 characters'),
    });

    const inputChangeHandler = (text,inputField) => {
        if(inputField === 1){
            setPhoneNumber(text)
        } else if(inputField === 2){
            setPassword(text)
        }
    }

    const handleSubmit = async () => {
        try {
            const resData = await (authActions.signin(phonenumber, password));
            dispatch(authenticate(resData.data.username, resData.token))
            console.log("loginsucc")
            navigation.navigate('BottomNavigator')
        } catch (error) {
            console.log(error.message);
            setIsLoading(false);
        }
    }
    const onLogin = (email, password) => {
        try {
            // await auth().signInWithEmailAndPassword(email, password)
            console.log('Firebase login successful ', email, password)
        } catch (error) {
            Alert.alert(
                'ERROR',
                error.message + '\n\nWhat would you like to do next ?',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK'),
                        style: 'cancel',
                    },
                    {
                        text: 'Sign Up',
                        onPress: () => navigation.navigate('SignupScreen')
                    },
                ]
            )
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ phonenumber: '', password: '' }}
                // onSubmit={values => {
                //     onLogin(values.email, values.password)
                //     console.log(values);
                // }}
                validationSchema={LoginFormSchema}
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
                                placeholder='Phone number, username or email'
                                autoCapitalize='none'
                                keyboardType='phone-number'
                                textContentType='phoneNumber'
                                onChangeText={(text) => inputChangeHandler(text,1)}
                                onBlur={handleBlur('email')}
                                value={phonenumber}
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
                                onChangeText={(text) => inputChangeHandler(text,2)}
                                onBlur={handleBlur('password')}
                                value={password}
                            />
                        </View>
                        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot password ?</Text>
                        </View>
                        <Pressable
                            titleSize={20}
                            style={styles.button(true)}
                            onPress={handleSubmit}
                            // disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Log in</Text>
                        </Pressable>

                        <View style={styles.signupContainer}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                                <Text style={{ color: '#6BB0F5' }}>Sign Up</Text>
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
        marginTop: 60,
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
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default LoginForm
