import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native'
import CommentInput from './CommentInput'

const CommentScreen = () => {
    const route = useRoute();

    // console.log(route.params?.post);
    const post = route.params?.post;

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <ScrollView>
                {post.comments.map((comment, index) => (
                    <CommentItem key={index} user={comment.user} comment={comment.comment} />
                ))}

            </ScrollView>
            <CommentInput />
        </SafeAreaView>
    )
}

const CommentItem = ({ user, comment }) => {
    const navigation = useNavigation();

    const [liked, setLiked] = useState(false);

    const onPressWhiteLike = () => {
        setLiked(true);
    }

    const onPressRedLike = () => {
        setLiked(false);
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            backgroundColor: 'white',
            borderBottomColor: '#f8f8f8',
            borderBottomWidth: 1
        }}>
            <TouchableOpacity onPress={() => console.warn("click channel of commenter")}>
                <Image
                    source={{ uri: 'https://thuthuatnhanh.com/wp-content/uploads/2020/09/anh-avt-anime-chat-nhat-580x580.jpg' }}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 15
                    }}

                />
            </TouchableOpacity>
            <View style={{
                flex: 1
            }}>
                <Text
                    numberOfLines={1}
                    style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'black'
                    }}>{user}</Text>
                <Text style={{
                    paddingTop: 3,
                    fontSize: 14
                }}>{comment}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 5
                }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontSize: 13,
                            color: 'grey',
                            width: 80,
                            marginRight: 20
                        }}>07:23 Sunday</Text>
                    <TouchableOpacity>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: 13
                        }}>Reply</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {liked ?
                <TouchableOpacity onPress={onPressRedLike}>
                    <AntDesign name="heart" size={20} color="red" style={{ marginRight: 5, marginLeft: 10 }} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onPressWhiteLike}>
                    <AntDesign name="hearto" size={20} color="black" style={{ marginRight: 5, marginLeft: 10 }} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default CommentScreen
