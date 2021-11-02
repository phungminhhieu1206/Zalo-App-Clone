import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { SignedInStack, SignedOutStack } from './navigation'

const AuthNavigation = ({ colorScheme }) => {

    const [currentUser, setCurrentUser] = useState(null)

    const userHandler = user =>
        user ? setCurrentUser(user) : setCurrentUser(null)

    useEffect(
        () => auth().onAuthStateChanged(user => userHandler(user)),
        []
    )

    return <>{currentUser ? <SignedInStack colorScheme={colorScheme} /> : <SignedOutStack />}</>

}

export default AuthNavigation