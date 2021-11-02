import React, { Fragment, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Image } from 'react-native'
import validUrl from 'valid-url'
import { useNavigation } from "@react-navigation/native";

const PLACEHOLDER_IMG = 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const FormikPostUploader = () => {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

    const navigation = useNavigation();

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={values => {
                console.log(values)
                console.log('Your post was submitted successfully')
                navigation.goBack()
            }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <Fragment>
                    <View
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}
                    >
                        <Image source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }} style={{ width: 100, height: 100 }} />

                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={{ color: 'black', fontSize: 20 }}
                                placeholder='Write a caption ... '
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>

                    <TextInput
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'black', fontSize: 18 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 12, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </Fragment>
            )}
        </Formik>
    )
}

export default FormikPostUploader
