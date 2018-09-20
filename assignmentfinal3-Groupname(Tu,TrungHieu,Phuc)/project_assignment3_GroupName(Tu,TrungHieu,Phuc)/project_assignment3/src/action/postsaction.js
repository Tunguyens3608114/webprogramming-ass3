import * as Types from '../reducers/constants/actionTypePosts';
import callApi from '../reducers/utils/apiCaller';

export const actFetchPostsRequest = () => {
  return dispatch => {
    return callApi('posts', 'GET', null).then(res => {
      dispatch(actFetchPosts(res.data));
    });
  };
}

export const actFetchPosts = (posts) => {
  return {
    type: Types.FETCH_POSTS_SUCCESS,
    posts
  }
}

// I try to create this function for Own project
export const actFetchOwnPostsRequest = (username) => {
  var body = {
    username: username
  }
  console.log("api from username: ", username)
  return dispatch => {
    return callApi('posts/getown', 'POST', body).then(res => {
     // console.log('req.username;', username) /// <---- true/ superwomen
      dispatch(actFetchOwnPosts(res.data));
     // console.log('res.data;', res.data) // <--- true/ get data successfuly!
    });
  };
}

export const actFetchOwnPosts = (posts) => {
  return {
    type: Types.FETCH_OWNPOSTS_SUCCESS,
    posts
  }
}


export const actDeletePostRequest = (_id) => {
  return dispatch => {
    return callApi(`posts/${_id}`, 'DELETE', null).then(res => {
      dispatch(actDeletePost(_id));
    })
  }
}

export const actDeletePost = (_id) => {
  return {
    type: Types.DELETE_POST,
    _id
  }
}

export const actAddPostRequest = (post) => {
  return dispatch => {
    return callApi('posts', 'POST', post).then(res => {
      dispatch(actAddPost(res.data));
    });
  }
}

export const actAddPost = (post) => {
  return {
    type: Types.ADD_POST,
    post
  }
}

export const actGetPostRequest = (_id) => {
  return dispatch => {
    return callApi(`posts/${_id}`, 'GET', null).then(res => {
      dispatch(actGetPost(res.data));
    });
  }
}

export const actGetPost = (post) => {
  return {
    type: Types.EDIT_POST,
    post
  }
}

export const actUpdatePostRequest = (post) => {
  return dispatch => {
    return callApi(`posts/${post._id}`, 'PUT', post).then(res => {
      dispatch(actUpdatePost(res.data));
    });
  }
}

export const actUpdatePost = (post) => {
  return {
    type: Types.UPDATE_POST,
    post
  }
}