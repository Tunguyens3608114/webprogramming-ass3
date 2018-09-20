import * as Types from '../constants/actionTypePosts';

var initialState = {};

const editPosts = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_POST:
            return action.post;
        default:
            return state;
    }
}

export default editPosts;
