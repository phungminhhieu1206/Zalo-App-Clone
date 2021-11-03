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
    MaterialCommunityIcons
} from '@expo/vector-icons';

const Post = ({ post }) => {
    return (
        <View style={[styles.container, { marginBottom: 30 }]}>
            <PostHeader post={post} />
            {post.caption ? <Caption post={post} /> : null}
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>
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
            <Text
                style={{
                    color: 'black',
                    marginLeft: 5,
                    fontWeight: '700'
                }}
            >
                {post.user}
            </Text>
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
    const [liked, setLiked] = useState(false);

    const onPressWhiteLike = () => {
        setLiked(true);
        post.likes += 1;
    }

    const onPressRedLike = () => {
        setLiked(false);
        post.likes -= 1;
    }

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            {liked ?
                <TouchableOpacity onPress={onPressRedLike}>
                    <AntDesign name="heart" size={33} color="red" />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onPressWhiteLike}>
                    <AntDesign name="hearto" size={33} color="black" />
                </TouchableOpacity>
            }
            <Text
                numberOfLines={1}
                style={{
                    fontSize: 18,
                    marginLeft: 8,
                    width: 60,
                }}>{post.likes}</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name="comment-processing-outline" size={33} color="black" />
            </TouchableOpacity>
            <Text
                numberOfLines={1}
                style={{
                    fontSize: 18,
                    marginLeft: 8,
                    width: 60,
                }}>12</Text>
        </View>
    )
}

// const Icon = ({ imgStyle, imgUrl }) => (
//     <TouchableOpacity>
//         <Image style={imgStyle} source={{ uri: imgUrl }} />
//     </TouchableOpacity>
// )

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

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

const Comments = ({ post }) => (
    <Fragment>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 3 }}>
                <Text style={{ color: 'black' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
                    {' '}{comment.comment}
                </Text>
            </View>
        ))}
    </Fragment>
)

const styles = StyleSheet.create({
    container: {
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
        backgroundColor: 'white'
    },
    profile_picture: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },
})

export default Post
