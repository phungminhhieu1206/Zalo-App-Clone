import React, { Fragment, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Image } from 'react-native'
import validUrl from 'valid-url'
import { useNavigation } from "@react-navigation/native";

import * as postsActions from '../../api/posts'
import { useDispatch } from 'react-redux'
import { addPost } from '../../store/actions/posts'

const PLACEHOLDER_IMG = 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
});



const FormikPostUploader = () => {

    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

    const navigation = useNavigation();
    const dispatch = useDispatch()
    
    const [described, setDescribed] = useState("");

    async function convertImageToBase64(d){
        var reader = new FileReader();    
        reader.readAsDataURL(d);          
        return new Promise((res,rej)=> {  
          reader.onload = (e) => {       
            res(e.target.result)
          }
        })
      }; 

    const handleSubmit = async () => {
        try {

            let path = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fthuthuatnhanh.com%2Fwp-content%2Fuploads%2F2021%2F06%2Fhinh-anh-con-soi-1.jpg&imgrefurl=https%3A%2F%2Fthuthuatnhanh.com%2Fhinh-anh-con-soi%2F&tbnid=0DowQGViaYHtmM&vet=12ahUKEwjCzZjOkNP0AhWyNaYKHZ-HBUcQMygEegUIARC-AQ..i&docid=qQ8JukKpPETfWM&w=1920&h=1080&itg=1&q=h%C3%ACnh%20%E1%BA%A3nh&ved=2ahUKEwjCzZjOkNP0AhWyNaYKHZ-HBUcQMygEegUIARC-AQ';
            var res = await fetch(path);
            var blob = await res.blob();
            var images = await convertImageToBase64(blob);
    
            const dataResult = await (postsActions.createPost(described, images));
            dispatch(addPost(dataResult))
            console.log("post succ");
            let postData = {
                _id: dataResult.data._id,
                // title: dataResult.title,
                body: dataResult.data.described,
                comments: dataResult.data.countComments,
                imageUrl: dataResult.data.images,
                created: new Date(dataResult.data.createdAt),
                likes: dataResult.data.like,
                isLike: dataResult.data.isLike,
                postedBy: {
                    _id: dataResult.data.auth
                }
            }
            dispatch(addPost(postData));
            
            navigation.goBack();
        } catch (error) {
            console.log(error.message);
        }
    }

    const inputChangeHandler = (text,inputField) => {
        if(inputField === 1){
            setDescribed(text)
        } else if(inputField === 2){
            // setPassword(text)
            console.log("test")
        }
    }
    

    return (
        <Formik
            initialValues={{ described: '', imageUrl: '' }}
            // onSubmit={values => {
            //     console.log(values)
            //     console.log('Your post was submitted successfully')
            //     navigation.goBack()
            // }}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
        >
            {({ handleBlur, handleChange, values, errors, isValid }) => (
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
                                onChangeText={(text) => inputChangeHandler(text,1)}
                                onBlur={handleBlur('described')}
                                value={described}
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
                    <Button onPress={handleSubmit} title='Share'
                    //  disabled={!isValid}
                      />
                </Fragment>
            )}
        </Formik>
    )
}

export default FormikPostUploader
