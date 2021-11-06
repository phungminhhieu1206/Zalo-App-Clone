import React, { Fragment, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {
    AntDesign,
    Feather,
    MaterialCommunityIcons,
    SimpleLineIcons
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const Post = ({ post }) => {
    // console.log(post);

    return (
        <View style={styles.container}>
            <PostHeader post={post} />
            {post.caption ? <Caption post={post} /> : null}
            <PostImage post={post} />
            <PostFooter post={post} />
            {/* <CommentSection post={post} /> */}
            {/* <Comments post={post} /> */}

        </View>
    )
}

const PostHeader = ({ post }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10
        }}
    >
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image
                source={{ uri: post.profile_picture }}
                style={styles.profile_picture}
            />
            <View style={{
                marginLeft: 12,
            }}>
                <Text
                    numberOfLines={1}
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 16
                    }}
                >
                    {post.user}
                </Text>
                <Text
                    numberOfLines={1}
                    style={{
                        color: 'grey',
                        fontSize: 12
                    }}
                >Today at 11:22</Text>
            </View>

        </View>

        <TouchableOpacity>
            <Feather name="more-horizontal" size={24} color="black" />
        </TouchableOpacity>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{
        width: '100%',
        height: 450,
    }}>
        <Image
            source={{ uri: post.imageUrl }}
            style={{
                height: '100%',
                resizeMode: 'cover',
            }}
        />
    </View>

)

const PostFooter = ({ post }) => {
    const navigation = useNavigation();

    const [liked, setLiked] = useState(false);

    const onPressWhiteLike = () => {
        setLiked(true);
        post.likes += 1;
    }

    const onPressRedLike = () => {
        setLiked(false);
        post.likes -= 1;
    }

    const onPressComment = () => {
        navigation.navigate("Comment", { post: post })
    }

    return (
        <View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderColor: '#F2F2F2'
            }}>
                {liked ?
                    <TouchableOpacity onPress={onPressRedLike}>
                        <AntDesign name="heart" size={30} color="red" />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={onPressWhiteLike}>
                        <AntDesign name="hearto" size={30} color="black" />
                    </TouchableOpacity>
                }
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 18,
                        marginLeft: 8,
                        width: 60,
                    }}>{post.likes}</Text>
                <TouchableOpacity onPress={onPressComment}>
                    <MaterialCommunityIcons name="comment-processing-outline" size={33} color="black" />
                </TouchableOpacity>
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 18,
                        marginLeft: 8,
                        width: 60,
                    }}>{post.comments.length}</Text>
            </View>
            <TouchableOpacity
                onPress={onPressComment}
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        marginRight: 10
                    }}
                />
                <View style={{
                    backgroundColor: '#f8f8f8',
                    flex: 1,
                    borderRadius: 25,
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: 5
                }}>
                    <SimpleLineIcons
                        name="emotsmile"
                        size={24}
                        style={{
                            marginHorizontal: 5,
                            color: '#595959'
                        }}
                    />
                    <Text
                        style={{
                            flex: 1,
                            marginHorizontal: 5,
                            color: 'lightgrey'
                        }}
                    >Write a comment</Text>
                    <Feather name="camera" size={24} style={{
                        marginHorizontal: 5,
                        color: '#595959'
                    }} />

                </View>
            </TouchableOpacity>
        </View>
    )
}

// const Icon = ({ imgStyle, imgUrl }) => (
//     <TouchableOpacity>
//         <Image style={imgStyle} source={{ uri: imgUrl }} />
//     </TouchableOpacity>
// )

// const Likes = ({ post }) => (
//     <View style={{ flexDirection: 'row', marginTop: 4 }}>
//         <Text style={{ color: 'white', fontWeight: '600' }}>
//             {post.likes.toLocaleString('en')} likes
//         </Text>
//     </View>
// )

const Caption = ({ post }) => (
    <View style={{}}>
        <Text style={{
            color: 'blue',
            fontSize: 18,
            paddingHorizontal: 10,
            paddingBottom: 10,
            fontWeight: '400',
            fontStyle: 'italic'
        }}>{post.caption}</Text>
    </View>
)

const CommentSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {post.comments.length ? (
            <Text style={{ color: 'gray' }}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        ) : null}
    </View>
)

// const Comments = ({ post }) => (
//     <Fragment>
//         {post.comments.map((comment, index) => (
//             <View key={index} style={{ flexDirection: 'row', marginTop: 3 }}>
//                 <Text style={{ color: 'black' }}>
//                     <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
//                     {' '}{comment.comment}
//                 </Text>
//             </View>
//         ))}
//     </Fragment>
// )

const styles = StyleSheet.create({
    container: {
        borderTopColor: '#f8f8f8',
        borderTopWidth: 7,
        backgroundColor: 'white'
    },
    profile_picture: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
})

export default Post
