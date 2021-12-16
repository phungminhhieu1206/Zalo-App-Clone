import ENV from '../../env';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export const DELETE_POST = "DELETE_PRODUCT";
export const CREATE_POST = "CREATE_PRODUCT";
export const UPDATE_POST = "UPDATE_PRODUCT";
export const SET_POSTS = 'SET_POSTS';
export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';
export const COMMENT_POST = 'COMMENT_POST';
export const UNCOMMENT_POST = 'UNCOMMENT_POST';
export const ADD_COMMENT_TEMP = 'ADD_COMMENT_TEMP';


export const addPost = (postData) => ({
    type: CREATE_POST,
    postData
    
});
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
    
});
export const updatePost = (updatedPostData) => ({
    type: UPDATE_POST,
    updatedPostData
    
});
export const likePost = (userId, postId) => ({
    type: LIKE_POST,
    userId,
    postId
    
});
export const unLikePost = (userId, postId) => ({
    type: LIKE_POST,
    userId,
    postId
    
});



// export const updatePost = (postId,title, body, base64Data, imageType) => {
//     return async (dispatch, getState) => {
//         const token = getState().auth.token;
//         let postData;
//         // const userId = getState().auth.user._id;
//         if( !base64Data || !imageType || (base64Data === '' && imageType === '')){
//             postData = {title, body}
//         } else {
//             postData = {title, body, base64Data, imageType}
//         }
//         const response = await fetch(`${ENV.apiUrl}/rn/post/${postId}`, {
//             method: "PUT",
//             headers: {
//                 'Content-Type': "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(postData)
//         });
//         const resData = await response.json();
//         if(resData.error){
//             throw new Error(resData.error);
//         }
//         dispatch({
//             type: UPDATE_POST,
//             updatedPostData: {
//                 _id: resData._id,
//                 title: resData.title,
//                 body: resData.body,
//                 comments: resData.comments,
//                 created: new Date(resData.created),
//                 likes: resData.likes,
//                 postedBy: {
//                     _id: resData.postedBy._id,
//                     name: resData.postedBy.name
//                 },
//                 updated: new Date(resData.updated)
//             }
//         });
//     }
// };


// export const likePost = (postId) => {
//     return async (dispatch, getState) => {
//         const token = getState().auth.token;
//         const userId = getState().auth.user._id;
//         const posts = getState().posts.allPosts;
//         const index = posts.findIndex(p => p._id === postId)
//         if(posts[index].likes.indexOf(userId) === -1){
//             dispatch({
//                 type: LIKE_POST,
//                 userId: userId,
//                 postId: postId
//             });
            
//             const response = await fetch(`${ENV.apiUrl}/post/like`, {
//                 method: "PUT",
//                 headers: {
//                     'Content-Type': "application/json",
//                     Authorization: `Bearer ${token}`
//                 },
//                 body: JSON.stringify({ userId, postId })
//             });
//             const resData = await response.json();
//             if(resData.error){
//                 throw new Error(resData.error);
//             }
//         }
//     }
// };


// export const unlikePost = (postId) => {
//     return async (dispatch, getState) => {
//         const token = getState().auth.token;
//         const userId = getState().auth.user._id;
        
//         dispatch({
//             type: UNLIKE_POST,
//             userId: userId,
//             postId: postId
//         });
//         const response = await fetch(`${ENV.apiUrl}/post/unlike`, {
//             method: "PUT",
//             headers: {
//                 'Content-Type': "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify({ userId, postId })
//         });
//         const resData = await response.json();
//         if(resData.error){
//             throw new Error(resData.error);
//         }
//     }
// };



// export const commentPost = (postId, text) => {
//     return async (dispatch, getState) => {
//         const token = getState().auth.token;
//         const userId = getState().auth.user._id;
//         const userName = getState().auth.user.name;
        
//         const comment = {text};

//         // dispatch({
//         //     type: ADD_COMMENT_TEMP,
//         //     postId: postId,
//         //     comment: {
//         //         text: text,
//         //         postedBy: {
//         //             _id: userId,
//         //             name: userName
//         //         },
//         //         created: new Date()
//         //     }
//         // });

//         const response = await fetch(`${ENV.apiUrl}/post/comment`, {
//             method: "PUT",
//             headers: {
//                 'Content-Type': "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify({ userId, postId, comment })
//         });
//         const resData = await response.json();
//         if(resData.error){
//             throw new Error(resData.error);
//         }
//         dispatch({
//             type: COMMENT_POST,
//             postId: postId,
//             comments: resData.comments
//         });
//     }
// };


// export const uncommentPost = (postId, comment) => {
//     return async (dispatch, getState) => {
//         const token = getState().auth.token;
//         const userId = getState().auth.user._id;
        
//         dispatch({
//             type: UNCOMMENT_POST,
//             postId: postId,
//             commentId: comment._id
//         });

//         const response = await fetch(`${ENV.apiUrl}/post/uncomment`, {
//             method: "PUT",
//             headers: {
//                 'Content-Type': "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify({ userId, postId, comment })
//         });
//         const resData = await response.json();
//         if(resData.error){
//             throw new Error(resData.error);
//         }
//     }
// };