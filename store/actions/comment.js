export const SET_COMMENT = "SET_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";

export const setComment = (comments) => ({
    type: SET_COMMENT,
    comments // (postId, )
    
});
export const createPost = (comment) => ({
    type: CREATE_COMMENT,
    comment
    
});