import { SET_COMMENT, CREATE_COMMENT } from "../actions/comment";

const initialState = {
    allComments: [],
};

export default (state=initialState, action) => {
    switch(action.type){
        case SET_COMMENT:
            return {
                ...state,
                allComments: action.comments
            }
        case CREATE_COMMENT:
            // const i = state.allComments.findIndex(post => post._id === action.postId);
            const updatedAddComment = [...state.allComments];
            updatedAddComment.comments = updatedAddComment.comments.concat(action.comment.content)
            return{
                ...state,
                allComments: updatedAddComment
            }

        default:
            return state;
    }
}