import React from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'

export const DismissKeyboard = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    )
}

