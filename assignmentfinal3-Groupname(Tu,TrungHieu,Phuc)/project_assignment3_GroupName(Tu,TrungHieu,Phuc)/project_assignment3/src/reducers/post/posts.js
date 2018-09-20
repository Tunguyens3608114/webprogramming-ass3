

import * as Types from '../constants/actionTypePosts';
var initialState = [];

var findIndex = (posts, id) => {
    var result = -1;
    posts.forEach((post, index) => {
        if (post.id === id) {
            result = index;
        }
    });
    return result;
}

const posts = (state = initialState, action) => {
    var index = -1;
    var { id, post } = action;
    switch (action.type) {
        case Types.FETCH_POSTS_SUCCESS:
            state = action.posts;
            return [...state];
        case Types.DELETE_POST:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_POST:
            state.push(action.post);
            return [...state];
        case Types.UPDATE_POST:
            index = findIndex(state, post.id);
            state[index] = post;
            return [...state];
        default: return [...state];
    }
};

export default posts;